import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSection from '../../containers/ProfileSection';
import ProfileTabMenu from '../../containers/ProfileTabMenu';

import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';
import DeletePostMutation from '../../mutations/DeletePostMutation';

import {
  showDeleteProjectAlert,
  showDeleteProjectSuccessAlert,
  showDeleteProjectFailedAlert,
  showDeletePostSuccessAlert,
  showDeletePostFailedAlert,
} from '../../helpers/alert';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      viewer: PropTypes.object,
    }),
    relay: PropTypes.shape({
      refetch: PropTypes.func.isRequired,
    }).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    refreshing: false,
  };

  handleFollowerPress = () => {
  };

  handleFollowingPress = () => {
  };

  handleMoreProjectsPress = () => {
    const { navigation } = this.props;
    navigation.push('MyProjects');
  };

  handleAddProjectPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreateProjectModal');
  };

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  };

  handleEditProject = (id) => {
    const { navigation } = this.props;
    navigation.navigate('EditProjectModal', { id });
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

  handleMorePostsPress = () => {
    const { navigation } = this.props;
    navigation.push('MyPosts');
  };

  handleAddPostPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  handleOpenPost = (postId) => {
    const { navigation } = this.props;
    navigation.push('MyPosts', { postId });
  };

  handleEditPost = (id) => {
    const { navigation } = this.props;
    navigation.navigate('EditPostModal', { id });
  };

  handleDeletePost = (id) => {
    const mutation = new DeletePostMutation({ id });

    mutation.commit()
      .then(showDeletePostSuccessAlert)
      .catch(showDeletePostFailedAlert);
  };

  handleMoreFavoritesPress = () => {
    const { navigation } = this.props;
    navigation.push('MyFavorites');
  };

  handleRefresh = () => {
    const { relay } = this.props;
    this.setState({ refreshing: true });
    relay.refetch(null, null, () => {
      this.setState({ refreshing: false });
    });
  };

  render() {
    const { navigation, query, loading } = this.props;
    const { refreshing } = this.state;
    const profile = query && query.viewer;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <ProfileHeader
            onSearch={() => navigation.navigate('SearchDetail')}
            onOpenSettings={() => navigation.navigate('SettingModal')}
          />
        )}
        loading={loading || !query.viewer}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      >
        <ProfileSection
          profile={profile}
          onFollowerPress={this.handleFollowerPress}
          onFollowingPress={this.handleFollowingPress}
        />
        <ProfileTabMenu
          profile={profile}
          editable
          onMoreProjectsPress={this.handleMoreProjectsPress}
          onAddProjectPress={this.handleAddProjectPress}
          onOpenProject={this.handleOpenProject}
          onEditProject={this.handleEditProject}
          onDeleteProject={this.handleDeleteProject}
          onMorePostsPress={this.handleMorePostsPress}
          onAddPostPress={this.handleAddPostPress}
          onOpenPost={this.handleOpenPost}
          onEditPost={this.handleEditPost}
          onDeletePost={this.handleDeletePost}
          onMoreFavoritesPress={this.handleMoreFavoritesPress}
        />
      </TopScreenView>
    );
  }
}
