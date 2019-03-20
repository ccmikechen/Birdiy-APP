import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import NormalTabBar from '../NormalTabBar';
import MyProjectsScene from '../MyProjectsScene';
import MyPostsScene from '../MyPostsScene';
import MyFavoritesScene from '../MyFavoritesScene';

import { projects, posts } from './mocks';

const TABS = ['專案', '投稿', '收藏'];

export default class ProfileTabMenu extends Component {
  static propTypes = {
    onMoreProjectsPress: PropTypes.func,
    onMorePostsPress: PropTypes.func,
  };

  static defaultProps = {
    onMoreProjectsPress: () => {},
    onMorePostsPress: () => {},
  };

  state = {
    index: 0,
  };

  renderProjects = () => {
    const { onMoreProjectsPress } = this.props;

    return (
      <MyProjectsScene
        projects={projects}
        onMorePress={onMoreProjectsPress}
      />
    );
  };

  renderPosts = () => {
    const { onMorePostsPress } = this.props;

    return (
      <MyPostsScene
        posts={posts}
        onMorePress={onMorePostsPress}
      />
    );
  };

  renderFavorites = () => <MyFavoritesScene projects={projects} />;

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
