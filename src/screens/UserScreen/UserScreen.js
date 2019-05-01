import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import UserHeader from '../../components/UserHeader';
import ProfileSection from '../../containers/ProfileSection';
import ProfileTabMenu from '../../containers/ProfileTabMenu';

export default class UserScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
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

  handleFollowerPress = () => {
  };

  handleFollowingPress = () => {
  };

  handleMoreProjectsPress = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    navigation.push('UserProjects', { id });
  };

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  };

  handleMorePostsPress = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    navigation.push('UserPosts', { id });
  };

  handleOpenPost = (id) => {
    const { navigation } = this.props;
    navigation.push('PostDetail', { id });
  };

  handleMoreFavoritesPress = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    navigation.push('UserFavorites', { id });
  };

  render() {
    const { navigation, query, loading } = this.props;
    const profile = query && query.user;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <UserHeader
            onBack={() => navigation.goBack()}
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
          onOpenProject={this.handleOpenProject}
          onMorePostsPress={this.handleMorePostsPress}
          onOpenPost={this.handleOpenPost}
          onMoreFavoritesPress={this.handleMoreFavoritesPress}
        />
      </TopScreenView>
    );
  }
}
