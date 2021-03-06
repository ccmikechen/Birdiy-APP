import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import HomeHeader from '../../components/HomeHeader';
import TouchableSectionTitle from '../../components/TouchableSectionTitle';
import CategoriesTable from '../../containers/CategoriesTable';
import ProjectThumbnailsTable from '../../containers/ProjectThumbnailsTable';
import FacebookSectionAd from '../../components/FacebookSectionAd';

import { isAdsVisible } from '../../helpers/ads';

import styles from './styles';

const adsManager = new FacebookAds.NativeAdsManager('595828547560598_623846844758768', 1);

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
      following: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
    relay: PropTypes.shape({
      refetch: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    query: null,
  };

  state = {
    refreshing: false,
  };

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
  };

  handleCategoryPress = (category) => {
    const { navigation } = this.props;
    navigation.navigate('Projects', {
      topics: [],
      categories: [category.name],
    });
  };

  handleMoreCategory = () => {
    const { navigation } = this.props;
    navigation.navigate('SelectTopicModal', {
      title: i18n.t('allTopics.title'),
      onSelect: (topic, category) => {
        navigation.navigate('Projects', {
          topics: [topic],
          categories: [category],
        });
      },
      onCategorySelect: (category) => {
        navigation.navigate('Projects', {
          topics: [],
          categories: [category],
        });
      },
    });
  };

  renderCategories = () => {
    const { query } = this.props;

    return (
      <View style={styles.categoriesContainer}>
        <TouchableSectionTitle
          title={i18n.t('allTopics.title')}
          onPress={this.handleMoreCategory}
        />
        <CategoriesTable
          query={query}
          onCategoryPress={this.handleCategoryPress}
        />
      </View>
    );
  };

  handleRefresh = () => {
    const { relay } = this.props;
    this.setState({ refreshing: true });
    relay.refetch(null, null, () => {
      this.setState({ refreshing: false });
    });
  };

  render() {
    const { navigation, query } = this.props;
    const { refreshing } = this.state;

    return (
      <TopScreenView
        {...this.props}
        renderHeader={() => (
          <HomeHeader
            onSearch={() => navigation.navigate('SearchDetail')}
            onOpenCart={() => navigation.push('Cart')}
          />
        )}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      >
        {this.renderCategories()}
        <View style={styles.paddingView} />
        <ProjectThumbnailsTable
          category="Craft"
          projects={query && query.craftProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
        {isAdsVisible() && (
          <View style={styles.sectionAd}>
            <FacebookSectionAd adsManager={adsManager} />
          </View>
        )}
        <ProjectThumbnailsTable
          category="Circuits"
          projects={query && query.electronicsProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
        <ProjectThumbnailsTable
          category="Living"
          projects={query && query.livingProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
        <ProjectThumbnailsTable
          category="Outside"
          projects={query && query.outsideProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
        <ProjectThumbnailsTable
          category="Science"
          projects={query && query.scienceProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
        <ProjectThumbnailsTable
          category="Workshop"
          projects={query && query.workshopProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
      </TopScreenView>
    );
  }
}
