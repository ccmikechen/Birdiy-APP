import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-paper';
import { clone, cloneDeep } from 'lodash';
import i18n from 'i18n-js';

import TabSectionScreenView from '../../components/TabSectionScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ImageUploadView from '../../components/ImageUploadView';
import EditSection from '../../components/EditSection';
import PureTextInput from '../../components/PureTextInput';
import PureSelector from '../../components/PureSelector';
import EditMaterialList from '../../components/EditMaterialList';
import EditFileList from '../../components/EditFileList';
import EditMethodList from '../../components/EditMethodList';

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

const TABS = [{
  key: 'intro', title: i18n.t('tabs.intro', i18nOptions),
}, {
  key: 'image', title: i18n.t('tabs.image', i18nOptions),
}, {
  key: 'material', title: i18n.t('tabs.materials', i18nOptions),
}, {
  key: 'method', title: i18n.t('tabs.methods', i18nOptions),
}, {
  key: 'tip', title: i18n.t('tabs.tip', i18nOptions),
}];

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
      projectImage: project.image,
      projectName: project.name,
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
    };
  }

  handleImageUpload = (image) => {
    this.setState({ projectImage: image.uri });
  };

  handleSelectCategory = (index) => {
    this.setState({ categoryIndex: index });
  };

  handleSelecteCategoryPress = () => {
    const { navigation } = this.props;

    navigation.navigate('SelectCategoryModal', {
      categories: this.getCategories(),
      onSelect: this.handleSelectCategory,
    });
  };

  handleMaterialChange = (materials) => {
    this.setState({ materials });
  };

  handleFileChange = (files) => {
    this.setState({ files });
  };

  handleMethodChange = (methods) => {
    this.setState({ methods });
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
    const {
      projectImage,
      projectName,
      introduction,
      tip,
      materials,
      files,
      methods,
    } = this.state;

    return new EditProjectMutation({
      id: query.project.id,
      name: projectName,
      category: this.getCategory(),
      introduction,
      tip,
      image: projectImage,
      materials,
      files,
      methods,
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

  renderSection = (key) => {
    const {
      projectImage,
      projectName,
      introduction,
      tip,
      materials,
      files,
      methods,
    } = this.state;
    const category = this.getCategory();

    switch (key) {
      case 'intro':
        return (
          <View style={styles.section}>
            <EditSection title={i18n.t('projectName.title', i18nOptions)}>
              <PureTextInput
                style={styles.textInput}
                value={projectName}
                placeholder={i18n.t('projectName.placeholder', i18nOptions)}
                onChangeText={value => this.setState({ projectName: value })}
                maxLength={20}
                counter
              />
            </EditSection>
            <EditSection title={i18n.t('category.title', i18nOptions)}>
              <PureSelector
                style={styles.textInput}
                placeholder={i18n.t('category.placeholder', i18nOptions)}
                value={category}
                onPress={this.handleSelecteCategoryPress}
              />
            </EditSection>
            <EditSection title={i18n.t('intro.title', i18nOptions)}>
              <PureTextInput
                style={styles.textInput}
                value={introduction}
                placeholder={i18n.t('intro.placeholder', i18nOptions)}
                onChangeText={value => this.setState({ introduction: value })}
                maxLength={300}
                multiline
                counter
              />
            </EditSection>
          </View>
        );
      case 'image':
        return (
          <EditSection title={i18n.t('image.title', i18nOptions)}>
            <View style={styles.projectImageContainer}>
              <ImageUploadView
                width="100%"
                aspect={[1, 1]}
                iconSize={Dimensions.get('window').width / 2}
                image={projectImage}
                onUpload={this.handleImageUpload}
              />
            </View>
          </EditSection>
        );
      case 'material':
        return (
          <View style={styles.section}>
            <EditSection title={i18n.t('materials.title', i18nOptions)}>
              <EditMaterialList
                data={materials}
                onChange={this.handleMaterialChange}
              />
            </EditSection>
            <EditSection title={i18n.t('files.title', i18nOptions)}>
              <EditFileList
                data={files}
                onChange={this.handleFileChange}
              />
            </EditSection>
          </View>
        );
      case 'method':
        return (
          <View style={styles.section}>
            <EditSection title={i18n.t('methods.title', i18nOptions)}>
              <EditMethodList
                data={methods}
                onChange={this.handleMethodChange}
              />
            </EditSection>
          </View>
        );
      case 'tip':
        return (
          <View style={styles.section}>
            <EditSection title={i18n.t('tip.title', i18nOptions)}>
              <PureTextInput
                style={styles.textInput}
                value={tip}
                placeholder={i18n.t('tip.placeholder', i18nOptions)}
                onChangeText={value => this.setState({ tip: value })}
                maxLength={300}
                multiline
                counter
              />
            </EditSection>
          </View>
        );
      default:
        return null;
    }
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
    const { categoryIndex } = this.state;
    const categories = this.getCategories();
    return (categories
            && categories[categoryIndex]
            && categories[categoryIndex].name) || null;
  };

  render() {
    const { navigation, loading } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <TabSectionScreenView
          navigation={navigation}
          tabs={TABS}
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
          renderSection={this.renderSection}
          renderFooter={this.renderFooter}
          fullScreen
          loading={loading}
        />
      </View>
    );
  }
}
