import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSection from '../../components/ProfileSection';
import ProfileTabMenu from '../../components/ProfileTabMenu';

import { profile } from './mocks';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
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

  handleMorePostsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('MyPosts');
  };

  handleAddPostPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  handleMoreFavoritesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('MyFavorites');
  };

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <ProfileHeader
            onOpenDrawer={() => navigation.openDrawer()}
            onOpenSettings={() => navigation.navigate('SettingModal')}
          />
        )}
      >
        <ProfileSection
          profile={profile}
          onFollowerPress={this.handleFollowerPress}
          onFollowingPress={this.handleFollowingPress}
        />
        <ProfileTabMenu
          onMoreProjectsPress={this.handleMoreProjectsPress}
          onAddProjectPress={this.handleAddProjectPress}
          onMorePostsPress={this.handleMorePostsPress}
          onAddPostPress={this.handleAddPostPress}
          onMoreFavoritesPress={this.handleMoreFavoritesPress}
        />
      </TopScreenView>
    );
  }
}
