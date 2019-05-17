import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { chunk } from 'lodash';

import InfiniteList from '../InfiniteList';
import ProjectSection from '../../containers/ProjectSection';

import styles from './styles';

export default class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
    loadMore: PropTypes.func.isRequired,
    renderNoItem: PropTypes.func,
    refreshing: PropTypes.bool,
    renderRefresh: PropTypes.func,
    actionButtonVisible: PropTypes.bool,
    onScrollTrigger: PropTypes.func,
    onProjectPress: PropTypes.func,
    onActionButtonPress: PropTypes.func,
    headerPadding: PropTypes.bool,
    canLoadMore: PropTypes.bool,
    showStatus: PropTypes.bool,
    refresh: PropTypes.func,
  };

  static defaultProps = {
    projects: null,
    renderNoItem: () => null,
    refreshing: false,
    renderRefresh: () => null,
    actionButtonVisible: false,
    onScrollTrigger: () => {},
    onProjectPress: () => () => {},
    onActionButtonPress: () => {},
    headerPadding: false,
    canLoadMore: false,
    showStatus: false,
    refresh: null,
  };

  scrollToTop = () => {
    if (!this.scrollView) {
      return;
    }
    this.scrollView.scrollTo({ x: 0, y: 0, animated: false });
  };

  renderProject = (project) => {
    const {
      onProjectPress,
      onActionButtonPress,
      actionButtonVisible,
      showStatus,
    } = this.props;

    return (
      <View style={styles.projectContainer}>
        {
          project ? (
            <ProjectSection
              project={project}
              onPress={onProjectPress}
              onActionButtonPress={onActionButtonPress}
              actionButtonVisible={actionButtonVisible}
              showStatus={showStatus}
            />
          ) : null
        }
      </View>
    );
  };

  renderProjectSection = data => (
    <View style={styles.projectSectionContainer}>
      {this.renderProject(data[0])}
      {this.renderProject(data[1])}
    </View>
  );

  render() {
    const {
      projects,
      loadMore,
      renderNoItem,
      refreshing,
      renderRefresh,
      onScrollTrigger,
      headerPadding,
      canLoadMore,
      refresh,
    } = this.props;

    if (refreshing) {
      return renderRefresh();
    }

    if (!projects) {
      return renderNoItem();
    }

    const projectSections = chunk(projects, 2);

    return (
      <View style={styles.container}>
        <InfiniteList
          data={projectSections}
          loadMoreContentAsync={loadMore}
          renderSection={this.renderProjectSection}
          onScrollTrigger={onScrollTrigger}
          canLoadMoreContent={canLoadMore}
          renderHeader={() => (headerPadding ? (
            <View style={styles.paddingView} />
          ) : null)}
          renderFooter={() => <View style={styles.bottomPaddingView} />}
          innerRef={(ref) => { this.scrollView = ref; }}
          refresh={refresh}
        />
      </View>
    );
  }
}
