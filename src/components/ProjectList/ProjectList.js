/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { chunk } from 'lodash';
import i18n from 'i18n-js';

import InfiniteList from '../InfiniteList';
import MessageView from '../MessageView';
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
    innerRef: PropTypes.func,
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
    innerRef: null,
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

  renderItem = ({ item }) => (
    <View style={styles.projectSectionContainer}>
      {this.renderProject(item[0])}
      {this.renderProject(item[1])}
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
      innerRef,
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
          ref={innerRef}
          data={projectSections}
          loadMoreContentAsync={loadMore}
          renderItem={this.renderItem}
          onScrollTrigger={onScrollTrigger}
          canLoadMoreContent={canLoadMore}
          ListHeaderComponent={() => (headerPadding ? (
            <View style={styles.paddingView} />
          ) : null)}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('projects.emptyMessage')}
              style={{ paddingTop: 200 }}
            />
)}
          ListFooterComponent={
            <View style={styles.bottomPaddingView} />
          }
          refresh={refresh}
          keyExtractor={item => item[0].__id}
        />
      </View>
    );
  }
}
