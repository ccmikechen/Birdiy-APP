import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSection from '../../containers/ProfileSection';
import GuestProfileSection from '../../components/ProfileSection';
import ProfileTabMenu from '../../containers/ProfileTabMenu';

import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';
import DeletePostMutation from '../../mutations/DeletePostMutation';

import {
  showDeleteProjectAlert,
  showDeleteProjectSuccessAlert,
  showDeletePostSuccessAlert,
} from '../../helpers/alert';
import {
  showDeleteProjectFailedMessage,
  showDeletePostFailedMessage,
} from '../../helpers/toast';

import { DEFAULT_PROFILE } from '../../constants/defaults';

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
      viewer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.shape({
          id: PropTypes.string.isRequired,
        }).isRequired,
      }),
    }),
    relay: PropTypes.shape({
      refetch: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    query: null,
  };

  state = {
    refreshing: false,
  };

  handleAvatarPress = () => {
    const { navigation } = this.props;
    navigation.push('ProfileSettingModal');
  };

  handleNamePress = () => {
    const { navigation } = this.props;
    navigation.push('ProfileSettingModal');
  };

  handleFollowingPress = () => {
    const { navigation, query } = this.props;
    const userId = query.viewer.user.id;
    navigation.push('FollowingUsers', { id: userId });
  };

  handleFollowerPress = () => {
    const { navigation, query } = this.props;
    const userId = query.viewer.user.id;
    navigation.push('Followers', { id: userId });
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
    const { query } = this.props;
    const mutation = new DeleteProjectMutation({
      id,
    }, query.viewer);

    mutation.commit()
      .then(showDeleteProjectSuccessAlert)
      .catch(showDeleteProjectFailedMessage);
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
    const { query } = this.props;
    const mutation = new DeletePostMutation({
      id,
    }, query.viewer);

    mutation.commit()
      .then(showDeletePostSuccessAlert)
      .catch(showDeletePostFailedMessage);
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

  handleLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginModal');
  };

  render() {
    const { navigation, query } = this.props;
    const { refreshing } = this.state;
    const profile = query && query.viewer;

    return (
      <TopScreenView
        {...this.props}
        renderHeader={() => (
          <ProfileHeader
            onSearch={() => navigation.navigate('SearchDetail')}
            onOpenSettings={() => navigation.navigate('SettingModal')}
          />
        )}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
        adType="admob"
      >
        {profile ? (
          <ProfileSection
            profile={profile}
            onAvatarPress={this.handleAvatarPress}
            onNamePress={this.handleNamePress}
            onFollowerPress={this.handleFollowerPress}
            onFollowingPress={this.handleFollowingPress}
          />
        ) : (
          <GuestProfileSection
            profile={DEFAULT_PROFILE}
            onAvatarPress={this.handleLoginPress}
            onNamePress={this.handleLoginPress}
            onFollowerPress={this.handleLoginPress}
            onFollowingPress={this.handleLoginPress}
          />
        )}
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
          onLogin={this.handleLoginPress}
        />
      </TopScreenView>
    );
  }
}
