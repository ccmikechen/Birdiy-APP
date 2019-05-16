import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import NormalTabBar from '../NormalTabBar';
import UserProjectsScene from '../../containers/UserProjectsScene';
import UserPostsScene from '../../containers/UserPostsScene';
import UserFavoritesScene from '../../containers/UserFavoritesScene';

export default class ProfileTabMenu extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      projects: PropTypes.object,
      posts: PropTypes.object,
      favoriteProjects: PropTypes.object,
    }),
    editable: PropTypes.bool,
    onMoreProjectsPress: PropTypes.func,
    onAddProjectPress: PropTypes.func,
    onOpenProject: PropTypes.func,
    onEditProject: PropTypes.func,
    onDeleteProject: PropTypes.func,
    onMorePostsPress: PropTypes.func,
    onAddPostPress: PropTypes.func,
    onOpenPost: PropTypes.func,
    onEditPost: PropTypes.func,
    onDeletePost: PropTypes.func,
    onMoreFavoritesPress: PropTypes.func,
  };

  static defaultProps = {
    profile: null,
    editable: false,
    onMoreProjectsPress: () => {},
    onAddProjectPress: () => {},
    onOpenProject: () => {},
    onEditProject: () => {},
    onDeleteProject: () => {},
    onMorePostsPress: () => {},
    onAddPostPress: () => {},
    onOpenPost: () => {},
    onEditPost: () => {},
    onDeletePost: () => {},
    onMoreFavoritesPress: () => {},
  };

  state = {
    index: 0,
  };

  renderProjects = () => {
    const {
      onMoreProjectsPress,
      onAddProjectPress,
      onOpenProject,
      onEditProject,
      onDeleteProject,
      profile,
      editable,
    } = this.props;

    return (
      <UserProjectsScene
        projects={profile.projects}
        editable={editable}
        onMorePress={onMoreProjectsPress}
        onAddPress={onAddProjectPress}
        onOpenProject={onOpenProject}
        onEditProject={onEditProject}
        onDeleteProject={onDeleteProject}
      />
    );
  };

  renderPosts = () => {
    const {
      onMorePostsPress,
      onAddPostPress,
      onOpenPost,
      onEditPost,
      onDeletePost,
      profile,
      editable,
    } = this.props;

    return (
      <UserPostsScene
        posts={profile.posts}
        editable={editable}
        onMorePress={onMorePostsPress}
        onAddPress={onAddPostPress}
        onOpenPost={onOpenPost}
        onEditPost={onEditPost}
        onDeletePost={onDeletePost}
      />
    );
  };

  renderFavorites = () => {
    const {
      onMoreFavoritesPress,
      onOpenProject,
      profile,
    } = this.props;

    return (
      <UserFavoritesScene
        projects={profile.favoriteProjects}
        onMorePress={onMoreFavoritesPress}
        onOpenProject={onOpenProject}
      />
    );
  };

  renderTabContent = () => {
    const { index } = this.state;
    switch (index) {
      case 0:
        return this.renderProjects();
      case 1:
        return this.renderPosts();
      case 2:
        return this.renderFavorites();
      default:
        return null;
    }
  };

  render() {
    const { index } = this.state;
    const tabs = [
      i18n.t('profile.tabs.projects'),
      i18n.t('profile.tabs.posts'),
      i18n.t('profile.tabs.favorites'),
    ];

    return (
      <View>
        <NormalTabBar
          tabs={tabs}
          index={index}
          onChange={tabIndex => this.setState({ index: tabIndex })}
        />
        {this.renderTabContent()}
      </View>
    );
  }
}
