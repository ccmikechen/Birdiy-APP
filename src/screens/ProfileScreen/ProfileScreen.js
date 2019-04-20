import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSection from '../../containers/ProfileSection';
import ProfileTabMenu from '../../containers/ProfileTabMenu';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      viewer: PropTypes.object,
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  handleFollowerPress = () => {
  };

  handleFollowingPress = () => {
  };

  handleMoreProjectsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('MyProjects');
  };

  handleAddProjectPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreateProjectModal');
  };

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.navigate('ProjectDetail', { id });
  };

  handleMorePostsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('MyPosts');
  };

  handleAddPostPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  handleOpenPost = (id) => {
    const { navigation } = this.props;
    navigation.navigate('PostDetail', { id });
  };

  handleMoreFavoritesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('MyFavorites');
  };

  render() {
    const { navigation, query, loading } = this.props;
    const profile = query && query.viewer;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <ProfileHeader
            onOpenDrawer={() => navigation.openDrawer()}
            onOpenSettings={() => navigation.navigate('SettingModal')}
          />
        )}
        loading={loading}
      >
        <ProfileSection
          profile={profile}
          onFollowerPress={this.handleFollowerPress}
          onFollowingPress={this.handleFollowingPress}
        />
        <ProfileTabMenu
          profile={profile}
          onMoreProjectsPress={this.handleMoreProjectsPress}
          onAddProjectPress={this.handleAddProjectPress}
          onProjectPress={this.handleOpenProject}
          onMorePostsPress={this.handleMorePostsPress}
          onAddPostPress={this.handleAddPostPress}
          onPostPress={this.handleOpenPost}
          onMoreFavoritesPress={this.handleMoreFavoritesPress}
        />
      </TopScreenView>
    );
  }
}
