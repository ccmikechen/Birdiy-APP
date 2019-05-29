/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import InfiniteList from '../InfiniteList';
import MessageView from '../MessageView';
import ProjectActivitySection from '../../containers/ProjectActivitySection';
import PostSection from '../../containers/PostSection';

import styles from './styles';

export default class ActivityList extends Component {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
    loadMore: PropTypes.func.isRequired,
    renderNoItem: PropTypes.func,
    onScrollTrigger: PropTypes.func,
    onUserPress: PropTypes.func,
    onActionButtonPress: PropTypes.func,
    onImagePress: PropTypes.func,
    onProjectPress: PropTypes.func,
    headerPadding: PropTypes.bool,
    canLoadMore: PropTypes.bool,
    refresh: PropTypes.func,
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    sections: null,
    renderNoItem: () => null,
    onScrollTrigger: () => {},
    onUserPress: () => {},
    onActionButtonPress: () => {},
    onImagePress: () => {},
    onProjectPress: () => {},
    headerPadding: false,
    canLoadMore: false,
    refresh: null,
    innerRef: null,
  }

  renderProject = (project, createdAt) => {
    const {
      onUserPress,
      onActionButtonPress,
      onProjectPress,
    } = this.props;

    return (
      <ProjectActivitySection
        project={project}
        createdAt={createdAt}
        onUserPress={onUserPress}
        onActionButtonPress={onActionButtonPress}
        onProjectPress={onProjectPress}
      />
    );
  };

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

  renderItemContent = (section) => {
    switch (section.type) {
      case 'project':
        return this.renderProject(section.data, section.createdAt);
      case 'post':
        return this.renderPost(section.data);
      default:
        return null;
    }
  }

  renderItem = ({ item }) => (
    <View style={styles.sectionContainer}>
      {this.renderItemContent(item)}
    </View>
  );

  render() {
    const {
      innerRef,
      sections,
      loadMore,
      renderNoItem,
      onScrollTrigger,
      headerPadding,
      canLoadMore,
      refresh,
    } = this.props;

    if (!sections) {
      return renderNoItem();
    }

    return (
      <View style={styles.container}>
        <InfiniteList
          ref={innerRef}
          data={sections}
          loadMoreContentAsync={loadMore}
          renderItem={this.renderItem}
          onScrollTrigger={onScrollTrigger}
          canLoadMoreContent={canLoadMore}
          ListHeaderComponent={headerPadding ? (
            <View style={styles.paddingView} />
          ) : null}
          ListEmptyComponent={
            <MessageView message={i18n.t('timeline.emptyMessage')} />
          }
          refresh={refresh}
          keyExtractor={item => item.data.__id}
        />
      </View>
    );
  }
}
