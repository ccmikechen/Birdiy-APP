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
  showPublishProjectLimitAlert,
  showDeleteProjectAlert,
  showDeleteProjectSuccessAlert,
} from '../../helpers/alert';
import {
  showSaveProjectSuccessMessage,
  showSaveProjectFailedMessage,
  showUnpublishProjectSuccessMessage,
  showSetProjectStatusFailedMessage,
  showDeleteProjectFailedMessage,
} from '../../helpers/toast';
import TimesRecord from '../../helpers/TimesRecord';

import {
  DEFAULT_MATERIAL,
  DEFAULT_FILE,
  DEFAULT_METHOD,
} from '../../constants/defaults';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };
const PUBLISH_LIMIT_HOURS = 24;
const PUBLISH_LIMIT_TIMES = 3;

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
        video: PropTypes.string,
        topic: PropTypes.shape({
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
    }),
  };

  static defaultProps = {
    query: null,
  };

  state = {
    initialized: false,
    projectPublished: false,
  };

  publishTimesRecord = new TimesRecord(
    PUBLISH_LIMIT_TIMES,
    1000 * 60 * 60 * PUBLISH_LIMIT_HOURS,
  );

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
        video: project.video,
        name: project.name,
        topic: project.topic.name,
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
    this.publishTimesRecord.load('publishTimesRecord');
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleGoBack);
  }

  handleOpenTopicSelector = (topic, callback) => {
    const { navigation } = this.props;
    navigation.navigate('SelectTopicModal', {
      selected: topic,
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
      .catch(showDeleteProjectFailedMessage);
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
    if (!this.publishTimesRecord.isValid()) {
      showPublishProjectLimitAlert(PUBLISH_LIMIT_HOURS, PUBLISH_LIMIT_TIMES);
      return;
    }

    const { screenProps: { spinner } } = this.props;
    const mutation = new EditAndPublishProjectMutation(values).setHook(spinner);

    mutation.commit()
      .then((res) => {
        this.publishTimesRecord.addRecord();
        this.handleSavingResponse(res);
      })
      .catch(() => showSetProjectStatusFailedMessage());
  }

  handleSavingResponse = (res) => {
    const { navigation } = this.props;

    if (res.errors) {
      this.handleSavingError();

      return;
    }
    navigation.goBack();
    showSaveProjectSuccessMessage();
  };

  handleSavingError = () => {
    showSaveProjectFailedMessage();
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
        showUnpublishProjectSuccessMessage();
      })
      .catch(() => showSetProjectStatusFailedMessage());
  };

  handleGoBack = () => {
    const { navigation } = this.props;
    showGoBackAlert().then(() => navigation.goBack());

    return true;
  };

  render() {
    const { initialProject, projectPublished } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <SimpleScreenView
          {...this.props}
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
          headerPadding={false}
        >
          <ProjectEditor
            ref={(ref) => { this.projectEditor = ref; }}
            initialValues={initialProject}
            onSubmit={this.handleSubmit}
            onOpenTopicSelector={this.handleOpenTopicSelector}
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
