import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-paper';
import { clone, cloneDeep } from 'lodash';
import i18n from 'i18n-js';

import TabsScreenView from '../../components/TabsScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProjectIntroEditor from '../../components/ProjectIntroEditor';
import ProjectImageEditor from '../../components/ProjectImageEditor';
import ProjectMaterialEditor from '../../components/ProjectMaterialEditor';
import ProjectFileEditor from '../../components/ProjectFileEditor';
import ProjectMethodEditor from '../../components/ProjectMethodEditor';
import ProjectTipEditor from '../../components/ProjectTipEditor';

import EditProjectMutation from '../../mutations/EditProjectMutation';
import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';
import PublishProjectMutation from '../../mutations/PublishProjectMutation';
import UnpublishProjectMutation from '../../mutations/UnpublishProjectMutation';

import {
  showSaveProjectSuccessAlert,
  showSaveProjectFailedAlert,
  showSetProjectFailedAlert,
  showPublishProjectSuccessAlert,
  showUnpublishProjectSuccessAlert,
  showDeleteProjectAlert,
  showDeleteProjectSuccessAlert,
  showDeleteProjectFailedAlert,
} from '../../helpers/alert';

import {
  DEFAULT_MATERIAL,
  DEFAULT_FILE,
  DEFAULT_METHOD,
} from '../../constants/defaults';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class EditProjectScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    screenProps: PropTypes.shape({
      spinner: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    query: PropTypes.shape({
      project: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        published: PropTypes.bool,
        image: PropTypes.string,
        category: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
        tip: PropTypes.string,
        materials: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          amountUnit: PropTypes.string.isRequired,
          url: PropTypes.string,
        })),
        fileResources: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        })),
        methods: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          image: PropTypes.string,
          title: PropTypes.string,
          content: PropTypes.string.isRequired,
        })),
      }),
      categories: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string,
          }),
        })),
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    initialized: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { initialized } = prevState;

    if (!query || initialized) {
      return null;
    }

    const { project, categories } = query;
    const categoryIndex = categories.edges.reduce((
      acc, { node: { name } }, index,
    ) => (
      name === project.category.name ? index : acc
    ), null);

    return {
      initialized: true,
      project: {
        image: project.image,
        name: project.name,
        categoryIndex,
        introduction: project.introduction || '',
        tip: project.tip || '',

        materials: project.materials.length > 0
          ? cloneDeep(project.materials)
          : [clone(DEFAULT_MATERIAL)],

        files: project.fileResources.length > 0
          ? cloneDeep(project.fileResources)
          : [clone(DEFAULT_FILE)],

        methods: project.methods.length > 0
          ? cloneDeep(project.methods)
          : [clone(DEFAULT_METHOD)],
      },
    };
  }

  handleSelectCategory = (index) => {
    const { project } = this.state;
    this.setState({ project: { ...project, categoryIndex: index } });
  };

  handleSelectCategoryPress = () => {
    const { navigation } = this.props;

    navigation.navigate('SelectCategoryModal', {
      categories: this.getCategories(),
      onSelect: this.handleSelectCategory,
    });
  };

  handleDelete = () => {
    showDeleteProjectAlert().then(this.deleteProject);
  };

  deleteProject = () => {
    const {
      query,
      navigation,
      screenProps: { spinner },
    } = this.props;
    const mutation = new DeleteProjectMutation({
      id: query.project.id,
    }).setHook(spinner);

    mutation.commit()
      .then(() => {
        navigation.goBack();
        showDeleteProjectSuccessAlert();
      })
      .catch(showDeleteProjectFailedAlert);
  };

  handleSave = () => {
    const { navigation } = this.props;
    const mutation = this.getEditProjectMutation();

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handleSavingError();

          return;
        }
        navigation.goBack();
        showSaveProjectSuccessAlert();
      })
      .catch(this.handleSavingError);
  };

  getEditProjectMutation = () => {
    const { query, screenProps: { spinner } } = this.props;
    const { project } = this.state;

    return new EditProjectMutation({
      ...project,
      id: query.project.id,
      category: this.getCategory(),
    }).setHook(spinner);
  };

  handleSavingError = () => {
    showSaveProjectFailedAlert();
  };

  handlePublish = () => {
    const {
      query,
      navigation,
      screenProps: { spinner },
    } = this.props;
    const mutation = new PublishProjectMutation({
      id: query.project.id,
    }).setHook(spinner);

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handlePublishingError();

          return;
        }

        navigation.goBack();
        showPublishProjectSuccessAlert();
      })
      .catch(this.handlePublishingError);
  };

  handleUnpublish = () => {
    const {
      query,
      navigation,
      screenProps: { spinner },
    } = this.props;
    const mutation = new UnpublishProjectMutation({
      id: query.project.id,
    }).setHook(spinner);

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handlePublishingError();

          return;
        }

        navigation.goBack();
        showUnpublishProjectSuccessAlert();
      })
      .catch(this.handlePublishingError);
  };

  handlePublishingError = () => {
    showSetProjectFailedAlert();
  };

  renderFooter = () => {
    const { query } = this.props;

    return (
      <View style={styles.footerContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.submitButton}
            mode="contained"
            onPress={this.handleSave}
          >
            <Text style={styles.submitButtonText}>
              {i18n.t('general.save')}
            </Text>
          </Button>
          {query && query.project.published ? (
            <Button
              style={[styles.submitButton, styles.unpublishButton]}
              mode="contained"
              onPress={this.handleUnpublish}
            >
              <Text style={styles.submitButtonText}>
                {i18n.t('unpublish', i18nOptions)}
              </Text>
            </Button>
          ) : (
            <Button
              style={[styles.submitButton, styles.publishButton]}
              mode="contained"
              onPress={this.handlePublish}
            >
              <Text style={styles.submitButtonText}>
                {i18n.t('publish', i18nOptions)}
              </Text>
            </Button>
          )}
        </View>
      </View>
    );
  };

  getCategories = () => {
    const { query } = this.props;

    return query && query.categories.edges.map(({ node }) => node);
  };

  getCategory = () => {
    const { project: { categoryIndex } } = this.state;
    const categories = this.getCategories();
    return (categories
            && categories[categoryIndex]
            && categories[categoryIndex].name) || null;
  };

  handleChange = (data) => {
    const { project } = this.state;
    this.setState({ project: { ...project, ...data } });
  };

  render() {
    const { navigation, loading } = this.props;
    const { project } = this.state;
    const category = loading ? null : this.getCategory();

    const tabs = [{
      key: 'intro', title: i18n.t('tabs.intro', i18nOptions),
    }, {
      key: 'image', title: i18n.t('tabs.image', i18nOptions),
    }, {
      key: 'material', title: i18n.t('tabs.materials', i18nOptions),
    }, {
      key: 'files', title: i18n.t('tabs.files', i18nOptions),
    }, {
      key: 'method', title: i18n.t('tabs.methods', i18nOptions),
    }, {
      key: 'tip', title: i18n.t('tabs.tip', i18nOptions),
    }];

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <TabsScreenView
          navigation={navigation}
          renderHeader={() => (
            <NormalBackHeader
              onBack={() => navigation.goBack()}
              title={i18n.t('title', i18nOptions)}
              rightButton={[{
                icon: 'delete',
                color: '#666666',
                onPress: this.handleDelete,
              }, {
                icon: 'save',
                color: '#666666',
                onPress: this.handleSave,
              }]}
            />
          )}
          tabs={tabs}
          tabsScrollable
          fullScreen
          loading={loading}
        >
          <View style={styles.section}>
            <ProjectIntroEditor
              project={{ ...project, category }}
              onChange={this.handleChange}
              onSelectCategoryPress={this.handleSelectCategoryPress}
            />
          </View>
          <View style={styles.section}>
            <ProjectImageEditor
              project={{ ...project }}
              onChange={this.handleChange}
            />
          </View>
          <View style={styles.section}>
            <ProjectMaterialEditor
              project={{ ...project }}
              onChange={this.handleChange}
            />
          </View>
          <View style={styles.section}>
            <ProjectFileEditor
              project={{ ...project }}
              onChange={this.handleChange}
            />
          </View>
          <View style={styles.section}>
            <ProjectMethodEditor
              project={{ ...project }}
              onChange={this.handleChange}
            />
          </View>
          <View style={styles.section}>
            <ProjectTipEditor
              project={{ ...project }}
              onChange={this.handleChange}
            />
          </View>
        </TabsScreenView>
      </View>
    );
  }
}
