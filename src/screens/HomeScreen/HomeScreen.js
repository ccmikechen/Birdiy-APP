import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import HomeHeader from '../../components/HomeHeader';
import ExtensibleSectionContent from '../../components/ExtensibleSectionContent';
import CategoriesTable from '../../containers/CategoriesTable';
import ProjectThumbnailsTable from '../../containers/ProjectThumbnailsTable';

import styles from './styles';

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
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    refreshing: false,
  };

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
  };

  handleMoreProject = () => {
    const { navigation } = this.props;
    navigation.navigate('Projects');
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
        <ExtensibleSectionContent
          onMorePress={this.handleMoreCategory}
          renderContent={() => (
            <CategoriesTable
              query={query}
              onCategoryPress={this.handleCategoryPress}
            />
          )}
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
    const { navigation, query, loading } = this.props;
    const { refreshing } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <HomeHeader
            onSearch={() => navigation.navigate('SearchDetail')}
            onOpenCart={() => navigation.push('Cart')}
          />
        )}
        loading={loading}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      >
        {this.renderCategories()}
        <ProjectThumbnailsTable
          title={i18n.t('categories.Craft')}
          category="Craft"
          projects={query && query.craftProjects}
          onProjectPress={this.handleOpenProject}
          onCategoryPress={this.handleCategoryPress}
        />
        <ProjectThumbnailsTable
          category="Electronics"
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
