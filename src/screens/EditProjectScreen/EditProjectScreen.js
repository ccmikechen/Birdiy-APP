import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  BackHandler,
} from 'react-native';
import { clone, cloneDeep } from 'lodash';
import i18n from 'i18n-js';

import SimpleScreenView from '../../components/SimpleScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProjectEditor from '../../components/ProjectEditor';
import ProjectOptionActions from '../../components/ProjectOptionActions';
import SaveProjectActions from '../../components/SaveProjectActions';

import EditProjectMutation from '../../mutations/EditProjectMutation';
import EditAndPublishProjectMutation from '../../mutations/EditAndPublishProjectMutation';
import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';
import UnpublishProjectMutation from '../../mutations/UnpublishProjectMutation';

import {
  showGoBackAlert,
  showSaveProjectSuccessAlert,
  showSaveProjectFailedAlert,
  showUnpublishProjectSuccessAlert,
  showSetProjectStatusFailedAlert,
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
    projectPublished: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { initialized } = prevState;

    if (!query || initialized) {
      return null;
    }

    const { project } = query;

    return {
      initialized: true,
      initialProject: {
        id: project.id,
        image: project.image,
        name: project.name,
        category: project.category.name,
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
      projectPublished: project.published,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleGoBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleGoBack);
  }

  handleOpenCategorySelector = (categories, callback) => {
    const { navigation } = this.props;
    navigation.navigate('SelectCategoryModal', {
      categories,
      onSelect: callback,
    });
  };

  handleOptionPress = () => {
    this.projectOptionActions.show();
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

  handleSaveButtonPress = () => {
    this.saveProjectActions.show();
  };

  handleSubmitPress = projectStatus => () => {
    const { projectPublished } = this.state;
    const status = projectPublished ? 'published' : projectStatus;
    this.projectEditor.submit(status);
  };

  handleSubmit = (projectStatus) => {
    if (projectStatus === 'published') {
      return this.handleSaveAndPublish;
    }
    return this.handleSave;
  };

  handleSave = (values) => {
    const { screenProps: { spinner } } = this.props;
    const mutation = new EditProjectMutation(values).setHook(spinner);

    mutation.commit()
      .then(this.handleSavingResponse)
      .catch(this.handleSavingError);
  };

  handleSaveAndPublish = (values) => {
    const { screenProps: { spinner } } = this.props;
    const mutation = new EditAndPublishProjectMutation(values).setHook(spinner);

    mutation.commit()
      .then(this.handleSavingResponse)
      .catch(() => showSetProjectStatusFailedAlert());
  }

  handleSavingResponse = (res) => {
    const { navigation } = this.props;

    if (res.errors) {
      this.handleSavingError();

      return;
    }
    navigation.goBack();
    showSaveProjectSuccessAlert();
  };

  handleSavingError = () => {
    showSaveProjectFailedAlert();
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
      .catch(() => showSetProjectStatusFailedAlert());
  };

  handleGoBack = () => {
    const { navigation } = this.props;
    showGoBackAlert().then(() => navigation.goBack());

    return true;
  };

  render() {
    const { navigation, loading, query } = this.props;
    const { initialProject, projectPublished } = this.state;
    const categories = query && query.categories.edges.map(({ node }) => node);

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <SimpleScreenView
          navigation={navigation}
          renderHeader={() => (
            <NormalBackHeader
              onBack={this.handleGoBack}
              title={i18n.t('title', i18nOptions)}
              rightButton={[{
                icon: 'more-vert',
                color: '#666666',
                onPress: this.handleOptionPress,
              }, {
                icon: 'save',
                color: '#666666',
                onPress: this.handleSaveButtonPress,
              }]}
            />
          )}
          fullScreen
          loading={loading}
        >
          <ProjectEditor
            ref={(ref) => { this.projectEditor = ref; }}
            initialValues={initialProject}
            onSubmit={this.handleSubmit}
            categories={categories}
            onOpenCategorySelector={this.handleOpenCategorySelector}
            published={projectPublished}
          />
        </SimpleScreenView>
        <ProjectOptionActions
          ref={(ref) => { this.projectOptionActions = ref; }}
          onUnpublish={this.handleUnpublish}
          onDelete={this.handleDelete}
          published={projectPublished}
        />
        <SaveProjectActions
          ref={(ref) => { this.saveProjectActions = ref; }}
          onSave={this.handleSubmitPress('draft')}
          onSaveAndPublish={this.handleSubmitPress('published')}
          published={projectPublished}
        />
      </View>
    );
  }
}
