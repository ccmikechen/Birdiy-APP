/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import SearchBarHeader from '../../components/SearchBarHeader';
import MyProjectList from '../../containers/MyProjectList';
import MyProjectActions from '../../components/MyProjectActions';

import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';

import {
  showDeleteProjectAlert,
  showDeleteProjectSuccessAlert,
  showDeleteProjectFailedAlert,
} from '../../helpers/alert';

export default class MyProjectsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.object,
    variables: PropTypes.shape({
      count: PropTypes.number,
    }).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  handleProjectPress = project => (
    project.published
      ? this.handleOpenProject(project)
      : this.handleEditProject(project)
  );

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
  };

  handleEditProject = (project) => {
    const { navigation } = this.props;
    navigation.navigate('EditProjectModal', { id: project.id });
  };

  handleDeleteProject = (id) => {
    showDeleteProjectAlert().then(() => this.deleteProject(id));
  };

  deleteProject = (id) => {
    const mutation = new DeleteProjectMutation({ id });

    mutation.commit()
      .then(showDeleteProjectSuccessAlert)
      .catch(showDeleteProjectFailedAlert);
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;

    return (
      <SimpleScreenView
        navigation={navigation}
        renderHeader={() => (
          <SearchBarHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <MyProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleProjectPress}
          onActionButtonPress={project => this.actions.show(project)}
          showStatus
        />
        <MyProjectActions
          ref={(ref) => { this.actions = ref; }}
          onEditProject={this.handleEditProject}
          onDeleteProject={this.handleDeleteProject}
        />
      </SimpleScreenView>
    );
  }
}
