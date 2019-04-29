import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import TopScreenView from '../../components/TopScreenView';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSection from '../../containers/ProfileSection';
import ProfileTabMenu from '../../containers/ProfileTabMenu';

import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';
import DeletePostMutation from '../../mutations/DeletePostMutation';

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

  handleEditProject = (id) => {
    const { navigation } = this.props;
    navigation.navigate('EditProjectModal', { id });
  };

  handleDeleteProject = (id) => {
    Alert.alert(
      '刪除專案',
      '專案一旦刪除則無法手動復原，確定要刪除專案嗎？',
      [
        { text: '取消' },
        { text: '確定', onPress: () => this.deleteProject(id) },
      ],
    );
  };

  deleteProject = (id) => {
    const mutation = new DeleteProjectMutation({ id });

    mutation.commit()
      .then(() => {
        Alert.alert(
          '專案刪除成功',
          '專案已成功刪除，若要復原請聯繫客服人員。',
        );
      })
      .catch(() => {
        Alert.alert('專案刪除失敗');
      });
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

  handleEditPost = (id) => {
    const { navigation } = this.props;
    navigation.navigate('EditPostModal', { id });
  };

  handleDeletePost = (id) => {
    const mutation = new DeletePostMutation({ id });

    mutation.commit()
      .then(() => {
        Alert.alert(
          '投稿刪除成功',
          '投稿已成功刪除，若要復原請聯繫客服人員。',
        );
      })
      .catch(() => {
        Alert.alert('投稿刪除失敗');
      });
  };

  handleMoreFavoritesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('MyFavorites');
  };

  reload = () => {
    const { relay } = this.props;

    relay.refetch();
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
