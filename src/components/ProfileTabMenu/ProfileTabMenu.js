/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import NormalTabBar from '../NormalTabBar';
import UserProjectsScene from '../../containers/UserProjectsScene';
import UserPostsScene from '../../containers/UserPostsScene';
import UserFavoritesScene from '../../containers/UserFavoritesScene';
import LoginMessageView from '../LoginMessageView';

import styles from './styles';

export default class ProfileTabMenu extends Component {
  static propTypes = {
    profile: PropTypes.object,
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
    onLogin: PropTypes.func,
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
    onLogin: () => {},
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
    const { index } = this.state;

    return (
      <UserProjectsScene
        profile={profile}
        editable={editable}
        onMorePress={onMoreProjectsPress}
        onAddPress={onAddProjectPress}
        onOpenProject={onOpenProject}
        onEditProject={onEditProject}
        onDeleteProject={onDeleteProject}
        visible={index === 0}
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
    const { index } = this.state;

    return (
      <UserPostsScene
        profile={profile}
        editable={editable}
        onMorePress={onMorePostsPress}
        onAddPress={onAddPostPress}
        onOpenPost={onOpenPost}
        onEditPost={onEditPost}
        onDeletePost={onDeletePost}
        visible={index === 1}
      />
    );
  };

  renderFavorites = () => {
    const {
      onMoreFavoritesPress,
      onOpenProject,
      profile,
    } = this.props;
    const { index } = this.state;

    return (
      <UserFavoritesScene
        profile={profile}
        onMorePress={onMoreFavoritesPress}
        onOpenProject={onOpenProject}
        visible={index === 2}
      />
    );
  };

  render() {
    const { profile, onLogin } = this.props;
    const { index } = this.state;
    const tabs = [
      i18n.t('profile.tabs.projects'),
      i18n.t('profile.tabs.posts'),
      i18n.t('profile.tabs.favorites'),
    ];

    return (
      <View style={styles.container}>
        <NormalTabBar
          tabs={tabs}
          index={index}
          onChange={tabIndex => this.setState({ index: tabIndex })}
        />
        <View style={styles.contentContainer}>
          {profile ? (
            <View>
              {this.renderProjects()}
              {this.renderPosts()}
              {this.renderFavorites()}
            </View>
          ) : (
            <LoginMessageView
              style={{ height: 300 }}
              onLogin={onLogin}
            />
          )}
        </View>
      </View>
    );
  }
}
