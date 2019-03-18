import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NormalTabBar from '../NormalTabBar';
import MyProjectsScene from '../MyProjectsScene';

import { projects } from './mocks';

const TABS = ['專案', '投稿', '收藏'];

export default class ProfileTabMenu extends Component {
  state = {
    index: 0,
  };

  renderProjects = () => <MyProjectsScene projects={projects} />;

  renderPosts = () => <MyProjectsScene projects={projects} />;

  renderFavorites = () => <MyProjectsScene projects={projects} />;

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
