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
} from '../../helpers/alert';
import {
  showDeleteProjectFailedMessage,
} from '../../helpers/toast';

export default class MyProjectsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }),
    variables: PropTypes.shape({
      count: PropTypes.number,
    }).isRequired,
  };

  static defaultProps = {
    query: null,
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
    const { query } = this.props;
    const mutation = new DeleteProjectMutation({
      id,
    }, query.viewer);

    mutation.commit()
      .then(showDeleteProjectSuccessAlert)
      .catch(showDeleteProjectFailedMessage);
  };

  render() {
    const {
      navigation, query, variables,
    } = this.props;

    return (
      <SimpleScreenView
        {...this.props}
        renderHeader={() => (
          <SearchBarHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
      >
        <MyProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleProjectPress}
          onActionButtonPress={project => this.actions.show(project)}
          showStatus
          showCountings
        />
        <MyProjectActions
          ref={(ref) => { this.actions = ref; }}
          onEditProject={({ id }) => this.handleEditProject(id)}
          onDeleteProject={({ id }) => this.handleDeleteProject(id)}
        />
      </SimpleScreenView>
    );
  }
}
