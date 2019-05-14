import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import InfiniteList from '../InfiniteList';
import ProjectActivitySection from '../../containers/ProjectActivitySection';
import PostSection from '../../containers/PostSection';

import styles from './styles';

export default class ActivityList extends Component {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
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
  };

  static defaultProps = {
    sections: null,
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
  };

  renderProject = (project) => {
    const {
      onUserPress,
      onActionButtonPress,
      onProjectPress,
    } = this.props;

    return (
      <ProjectActivitySection
        project={project}
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

  renderSectionContent = (section) => {
    switch (section.type) {
      case 'project':
        return this.renderProject(section.data);
      case 'post':
        return this.renderPost(section.data);
      default:
        return null;
    }
  }

  renderSection = section => (
    <View style={styles.sectionContainer}>
      {this.renderSectionContent(section)}
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
      sections,
      loadMore,
      renderNoItem,
      refreshing,
      renderRefresh,
      onScrollTrigger,
      headerPadding,
      canLoadMore,
    } = this.props;

    if (refreshing) {
      return renderRefresh();
    }

    if (!sections) {
      return renderNoItem();
    }

    return (
      <InfiniteList
        data={sections}
        loadMoreContentAsync={loadMore}
        renderSection={this.renderSection}
        onScrollTrigger={onScrollTrigger}
        canLoadMoreContent={canLoadMore}
        renderHeader={() => (headerPadding ? (
          <View style={styles.paddingView} />
        ) : null)}
        innerRef={(ref) => { this.scrollView = ref; }}
      />
    );
  }
}
