import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import UserHeader from '../../components/UserHeader';
import ProfileSection from '../../containers/ProfileSection';
import ProfileTabMenu from '../../containers/ProfileTabMenu';

import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';

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
      user: PropTypes.shape({
        following: PropTypes.bool.isRequired,
      }).isRequired,
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

  handleFollowUser = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    new FollowUserMutation({ id }).commit();
  };

  handleUnfollowUser = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    new CancelFollowUserMutation({ id }).commit();
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
    const userId = navigation.getParam('id');
    navigation.push('UserPosts', { userId });
  };

  handleOpenPost = (postId) => {
    const { navigation } = this.props;
    const userId = navigation.getParam('id');
    navigation.push('UserPosts', { userId, postId });
  };

  handleMoreFavoritesPress = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    navigation.push('UserFavorites', { id });
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
    const profile = query && query.user;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <UserHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
            onFollowUser={this.handleFollowUser}
            onUnfollowUser={this.handleUnfollowUser}
            following={(profile && profile.following) || false}
          />
        )}
        loading={loading}
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
