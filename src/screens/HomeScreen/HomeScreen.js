import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import HomeHeader from '../../components/HomeHeader';
import HomeSection from '../../components/HomeSection';
import ExtensibleSectionContent from '../../components/ExtensibleSectionContent';
import CategoriesTable from '../../containers/CategoriesTable';
import ProjectThumbnailsTable from '../../containers/ProjectThumbnailsTable';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
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
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
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
    navigation.navigate('Projects', { categories: [category.name] });
  };

  handleMoreCategory = () => {
    const { navigation } = this.props;
    navigation.navigate('AllCategoriesModal');
  };

  renderHotCategories = () => {
    const { query } = this.props;

    return (
      <ExtensibleSectionContent
        onMorePress={this.handleMoreCategory}
        renderContent={() => (
          <CategoriesTable
            query={query}
            onCategoryPress={this.handleCategoryPress}
          />
        )}
      />
    );
  };

  renderNewProjects = () => {
    const { query } = this.props;

    return (
      <ExtensibleSectionContent
        onMorePress={this.handleMoreProject}
        renderContent={() => (
          <ProjectThumbnailsTable
            query={query}
            onPressProject={this.handleOpenProject}
          />
        )}
      />
    );
  };

  render() {
    const { navigation, loading } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <HomeHeader
            onOpenDrawer={() => navigation.openDrawer()}
            onSearch={() => navigation.navigate('SearchDetail')}
            onOpenCart={() => navigation.push('Cart')}
          />
        )}
        loading={loading}
      >
        <HomeSection
          title={i18n.t('home.hotCategories')}
          renderContent={this.renderHotCategories}
        />
        <HomeSection
          title={i18n.t('home.newestProjects')}
          renderContent={this.renderNewProjects}
        />
      </TopScreenView>
    );
  }
}
