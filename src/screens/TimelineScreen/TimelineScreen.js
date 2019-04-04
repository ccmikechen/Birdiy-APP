import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import InfiniteTabsScreenView from '../../components/InfiniteTabsScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
import PostSection from '../../components/PostSection';
import AnimatedAddButton from '../../components/AnimatedAddButton';

import styles from './styles';

import { posts } from './mocks';

const TABS = [{
  key: 'all', title: '所有人',
}, {
  key: 'following', title: '跟隨中',
}];

export default class TimelineScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    data: {
      all: posts.map(post => ({
        type: 'post',
        data: post,
      })),
      following: posts.map(post => ({
        type: 'post',
        data: post,
      })),
    },
    addPostButtonVisible: true,
  };

  loadMoreContentAsync = key => async () => {
    const { data } = this.state;
    const sections = data[key];

    this.setState({
      data: {
        ...data,
        [key]: [
          ...sections,
          ...posts.map(post => ({
            type: 'post',
            data: post,
          })),
        ],
      },
    });
  };

  renderSection = () => (section) => {
    const { navigation } = this.props;

    switch (section.type) {
      case 'post':
        return (
          <View style={styles.postContainer}>
            <PostSection
              post={section.data}
              onPostPress={() => {
                navigation.push('PostDetail');
              }}
            />
          </View>
        );
      default:
        return null;
    }
  };

  handleSearch = () => {
    const { navigation } = this.props;
    navigation.push('SearchUser');
  };

  handleOpenFilter = () => {
    const { navigation } = this.props;
    navigation.push('UserFilter');
  };

  handleAddPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  render() {
    const { navigation } = this.props;
    const { data, addPostButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <InfiniteTabsScreenView
          navigation={navigation}
          renderHeader={() => (
            <NormalTopHeader
              title="動態"
              onOpenDrawer={() => navigation.openDrawer()}
            />
          )}
          tabs={TABS}
          data={data}
          loadMoreContentAsync={this.loadMoreContentAsync}
          renderSection={this.renderSection}
          onToggleTabBar={(visible) => {
            this.setState({ addPostButtonVisible: visible });
          }}
          animatedScroll
        />
        <AnimatedAddButton
          style={styles.addPostButton}
          visible={addPostButtonVisible}
          translate={80}
          renderIcon={() => (
            <Icon.FontAwesome
              name="pencil-square-o"
              size={26}
              color="#ffffff"
            />
          )}
          onPress={this.handleAddPress}
        />
      </View>
    );
  }
}
