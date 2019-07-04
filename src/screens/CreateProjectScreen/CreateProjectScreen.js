import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import InputScreenView from '../../components/InputScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProjectDraftEditor from '../../components/ProjectDraftEditor';

import CreateProjectMutation from '../../mutations/CreateProjectMutation';

import { showSaveProjectFailedMessage } from '../../helpers/toast';

const i18nOptions = { scope: 'project.create' };

export default class CreateProjectScreen extends Component {
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
  };

  initialProject = {
    name: '',
    topic: null,
  };

  handleOpenTopicSelector = (topic, callback) => {
    const { navigation } = this.props;
    navigation.navigate('SelectTopicModal', {
      selected: topic,
      onSelect: callback,
    });
  };

  handleSubmitPress = () => {
    this.projectDraftEditor.submit();
  };

  handleSubmit = (values) => {
    const { navigation, screenProps: { spinner } } = this.props;
    const mutation = new CreateProjectMutation(values).setHook(spinner);

    mutation.commit()
      .then((response) => {
        const { id } = response.createProject.project;

        navigation.goBack();
        navigation.navigate('EditProjectModal', { id });
      })
      .catch(this.handleSubmitError);
  };

  handleSubmitError = () => {
    showSaveProjectFailedMessage();
  };

  render() {
    const { navigation } = this.props;

    return (
      <InputScreenView
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('title', i18nOptions)}
            rightButton={{
              icon: 'save',
              color: '#666666',
              onPress: this.handleSubmitPress,
            }}
          />
        )}
        fullScreen
      >
        <ProjectDraftEditor
          ref={(ref) => { this.projectDraftEditor = ref; }}
          initialValue={this.initialProject}
          onOpenTopicSelector={this.handleOpenTopicSelector}
          onSubmit={this.handleSubmit}
          onSubmitPress={this.handleSubmitPress}
        />
      </InputScreenView>
    );
  }
}
