import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import InfiniteScreenView from '../../components/InfiniteScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
import PostSection from '../../components/PostSection';
import AnimatedAddPostButton from '../../components/AnimatedAddPostButton';

import styles from './styles';

import { posts } from './mocks';

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
    sections: posts.map(post => ({
      type: 'post',
      data: post,
    })),
    addPostButtonVisible: true,
  };

  loadMoreContentAsync = async () => {
    const { sections } = this.state;
    this.setState({
      sections: [
        ...sections,
        ...posts.map(post => ({
          type: 'post',
          data: post,
        })),
      ],
    });
  }

  renderSection = (section) => {
    switch (section.type) {
      case 'post':
        return (
          <View style={styles.postContainer}>
            <PostSection post={section.data} />
          </View>
        );
      default:
        return null;
    }
  };

  render() {
    const { navigation } = this.props;
    const { sections, addPostButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <InfiniteScreenView
          navigation={navigation}
          renderHeader={() => (
            <NormalTopHeader
              title="分享"
              onOpenDrawer={() => navigation.openDrawer()}
            />
          )}
          data={sections}
          loadMoreContentAsync={this.loadMoreContentAsync}
          renderSection={this.renderSection}
          onToggleTabBar={(visible) => {
            this.setState({ addPostButtonVisible: visible });
          }}
          animatedScroll
        />
        <AnimatedAddPostButton
          style={styles.addPostButton}
          visible={addPostButtonVisible}
          translate={80}
        />
      </View>
    );
  }
}
