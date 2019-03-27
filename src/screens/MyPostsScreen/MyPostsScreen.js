import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import InfiniteScreenView from '../../components/InfiniteScreenView';
import MyPostsHeader from '../../components/MyPostsHeader';
import PostSection from '../../components/PostSection';
import AnimatedAddButton from '../../components/AnimatedAddButton';

import styles from './styles';

import { posts } from './mocks';

export default class MyPostsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    data: posts.map(post => ({
      type: 'post',
      data: post,
    })),
    addPostButtonVisible: true,
  };

  loadMoreContentAsync = async () => {
    const { data } = this.state;

    this.setState({
      data: [
        ...data,
        ...posts.map(post => ({
          type: 'post',
          data: post,
        })),
      ],
    });
  };

  renderSection = (section) => {
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
  }

  handleReorder = () => {
  }

  render() {
    const { navigation } = this.props;
    const { data, addPostButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <InfiniteScreenView
          navigation={navigation}
          renderHeader={() => (
            <MyPostsHeader
              onBack={() => navigation.goBack()}
              onSearch={this.handleSearch}
              onReorder={this.handleReorder}
            />
          )}
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
        />
      </View>
    );
  }
}
