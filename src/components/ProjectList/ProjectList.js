/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import { Surface } from 'react-native-paper';
import { chunk, isEqual } from 'lodash';
import i18n from 'i18n-js';

import InfiniteList from '../InfiniteList';
import MessageView from '../MessageView';
import ProjectSection from '../../containers/ProjectSection';
import FacebookProjectSectionAd from '../FacebookProjectSectionAd';

import { isAdsVisible } from '../../helpers/ads';

import styles from './styles';

const adsManager = new FacebookAds.NativeAdsManager('595828547560598_626298657846920', 5);

const sectionsWithAds = (projects) => {
  const sections = [];

  for (let i = 0; i < projects.length; i += 1) {
    if (i % 12 === 4 && isAdsVisible()) {
      sections.push({ type: 'ad', key: `ad${i}` });
    }
    sections.push({ type: 'project', data: projects[i] });
  }

  return chunk(sections, 2);
};

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
    showCountings: PropTypes.bool,
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
    showCountings: false,
    refresh: null,
    innerRef: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { projects } = nextProps;
    const { projects: prevProjects } = prevState;

    if (isEqual(projects, prevProjects)) {
      return null;
    }

    return {
      ...prevState,
      projects,
      sections: sectionsWithAds(projects),
    };
  }

  constructor(props) {
    super(props);

    const { projects } = this.props;

    this.state = {
      projects,
      sections: sectionsWithAds(projects),
    };
  }

  renderProject = (project) => {
    const {
      onProjectPress,
      onActionButtonPress,
      actionButtonVisible,
      showStatus,
      showCountings,
    } = this.props;

    return project ? (
      <ProjectSection
        project={project}
        onPress={onProjectPress}
        onActionButtonPress={onActionButtonPress}
        actionButtonVisible={actionButtonVisible}
        showStatus={showStatus}
        showCountings={showCountings}
      />
    ) : null;
  };

  renderAd = () => (
    <Surface style={styles.adContainer}>
      <FacebookProjectSectionAd adsManager={adsManager} />
    </Surface>
  );

  renderSection = (section) => {
    if (!section) {
      return null;
    }

    switch (section.type) {
      case 'project':
        return this.renderProject(section.data);
      case 'ad':
        return this.renderAd();
      default:
        return null;
    }
  };

  renderItem = ({ item }) => (
    <View style={styles.projectSectionContainer}>
      <View style={styles.projectContainer}>
        {this.renderSection(item[0])}
      </View>
      <View style={styles.projectContainer}>
        {this.renderSection(item[1])}
      </View>
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
    const { sections } = this.state;

    if (refreshing) {
      return renderRefresh();
    }

    if (!projects) {
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
          keyExtractor={item => (
            item[0].type === 'ad' ? item[0].key : item[0].data.__id
          )}
        />
      </View>
    );
  }
}
