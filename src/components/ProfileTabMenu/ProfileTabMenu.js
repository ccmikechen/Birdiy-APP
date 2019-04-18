import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import NormalTabBar from '../NormalTabBar';
import MyProjectsScene from '../../containers/MyProjectsScene';
import MyPostsScene from '../../containers/MyPostsScene';
import MyFavoritesScene from '../../containers/MyFavoritesScene';

const TABS = ['專案', '投稿', '收藏'];

export default class ProfileTabMenu extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      projects: PropTypes.object,
      posts: PropTypes.object,
      favoriteProjects: PropTypes.object,
    }),
    onMoreProjectsPress: PropTypes.func,
    onAddProjectPress: PropTypes.func,
    onMorePostsPress: PropTypes.func,
    onAddPostPress: PropTypes.func,
    onMoreFavoritesPress: PropTypes.func,
  };

  static defaultProps = {
    profile: null,
    onMoreProjectsPress: () => {},
    onAddProjectPress: () => {},
    onMorePostsPress: () => {},
    onAddPostPress: () => {},
    onMoreFavoritesPress: () => {},
  };

  state = {
    index: 0,
  };

  renderProjects = () => {
    const {
      onMoreProjectsPress,
      onAddProjectPress,
      profile,
    } = this.props;

    return (
      <MyProjectsScene
        projects={profile.projects}
        onMorePress={onMoreProjectsPress}
        onAddPress={onAddProjectPress}
      />
    );
  };

  renderPosts = () => {
    const {
      onMorePostsPress,
      onAddPostPress,
      profile,
    } = this.props;

    return (
      <MyPostsScene
        posts={profile.posts}
        onMorePress={onMorePostsPress}
        onAddPress={onAddPostPress}
      />
    );
  };

  renderFavorites = () => {
    const { onMoreFavoritesPress, profile } = this.props;

    return (
      <MyFavoritesScene
        projects={profile.favoriteProjects}
        onMorePress={onMoreFavoritesPress}
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

    return (
      <View>
        <NormalTabBar
          tabs={TABS}
          index={index}
          onChange={tabIndex => this.setState({ index: tabIndex })}
        />
        {this.renderTabContent()}
      </View>
    );
  }
}
