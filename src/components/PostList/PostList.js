/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import { Surface } from 'react-native-paper';
import { isEqual } from 'lodash';
import i18n from 'i18n-js';

import InfiniteList from '../InfiniteList';
import MessageView from '../MessageView';
import PostSection from '../../containers/PostSection';
import FacebookActivitySectionAd from '../FacebookActivitySectionAd';

import styles from './styles';

const adsManager = new FacebookAds.NativeAdsManager('595828547560598_626276971182422', 3);

const sectionsWithAds = (posts) => {
  const sections = [];

  for (let i = 0; i < posts.length; i += 1) {
    if (i % 10 === 2) {
      sections.push({ type: 'ad', key: `ad${i}` });
    }
    sections.push({ type: 'post', data: posts[i] });
  }

  return sections;
};

export default class PostList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    loadMore: PropTypes.func.isRequired,
    renderNoItem: PropTypes.func,
    refreshing: PropTypes.bool,
    renderRefresh: PropTypes.func,
    onScrollTrigger: PropTypes.func,
    onUserPress: PropTypes.func,
    onActionButtonPress: PropTypes.func,
    onImagePress: PropTypes.func,
    onProjectPress: PropTypes.func,
    headerPadding: PropTypes.bool,
    canLoadMore: PropTypes.bool,
    refresh: PropTypes.func,
  };

  static defaultProps = {
    posts: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    onScrollTrigger: () => {},
    onUserPress: () => {},
    onActionButtonPress: () => {},
    onImagePress: () => {},
    onProjectPress: () => {},
    headerPadding: false,
    canLoadMore: false,
    refresh: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { posts } = nextProps;
    const { posts: prevProjects } = prevState;

    if (isEqual(posts, prevProjects)) {
      return null;
    }

    return {
      ...prevState,
      posts,
      sections: sectionsWithAds(posts),
    };
  }

  constructor(props) {
    super(props);

    const { posts } = this.props;

    this.state = {
      posts,
      sections: sectionsWithAds(posts),
    };
  }

  renderPost = (post) => {
    const {
      onUserPress,
      onActionButtonPress,
      onImagePress,
      onProjectPress,
    } = this.props;

    return (
      <PostSection
        post={post}
        onUserPress={onUserPress}
        onActionButtonPress={onActionButtonPress}
        onImagePress={onImagePress}
        onProjectPress={onProjectPress}
      />
    );
  };

  renderAd = () => (
    <Surface style={styles.adContainer}>
      <FacebookActivitySectionAd adsManager={adsManager} />
    </Surface>
  );

  renderSection = (section) => {
    switch (section.type) {
      case 'post':
        return this.renderPost(section.data);
      case 'ad':
        return this.renderAd();
      default:
        return null;
    }
  };

  renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      {this.renderSection(item)}
    </View>
  );

  scrollToTop = () => {
    if (!this.scrollView) {
      return;
    }
    this.scrollView.scrollTo({ x: 0, y: 0, animated: false });
  };

  render() {
    const {
      loadMore,
      renderNoItem,
      refreshing,
      renderRefresh,
      onScrollTrigger,
      headerPadding,
      canLoadMore,
      refresh,
    } = this.props;
    const { sections } = this.state;

    if (refreshing) {
      return renderRefresh();
    }

    if (!sections) {
      return renderNoItem();
    }

    return (
      <View style={styles.container}>
        <InfiniteList
          data={sections}
          loadMoreContentAsync={loadMore}
          renderItem={this.renderItem}
          onScrollTrigger={onScrollTrigger}
          canLoadMoreContent={canLoadMore}
          ListHeaderComponent={() => (headerPadding ? (
            <View style={styles.paddingView} />
          ) : null)}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('posts.emptyMessage')}
              style={{ paddingTop: 200 }}
            />
)}
          innerRef={(ref) => { this.scrollView = ref; }}
          refresh={refresh}
          keyExtractor={item => (
            item.type === 'ad' ? item.key : item.data.__id
          )}
        />
      </View>
    );
  }
}
