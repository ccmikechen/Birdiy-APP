import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import HomeHeader from '../../components/HomeHeader';
import HomeSection from '../../components/HomeSection';
import ExtensibleSectionContent from '../../components/ExtensibleSectionContent';
import CategoriesTable from '../../components/CategoriesTable';
import ProjectThumbnailsTable from '../../components/ProjectThumbnailsTable';

import { categories, projects, keywords } from './mocks';

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
  };

  handleOpenProject = () => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail');
  };

  handleMoreProject = () => {
    const { navigation } = this.props;
    navigation.navigate('Search');
  };

  renderHotCategories = () => (
    <ExtensibleSectionContent
      onMorePress={() => {}}
      renderContent={() => (
        <CategoriesTable categories={categories} />
      )}
    />
  );

  renderNewProjects = () => (
    <ExtensibleSectionContent
      onMorePress={this.handleMoreProject}
      renderContent={() => (
        <ProjectThumbnailsTable
          projects={projects}
          onPressProject={this.handleOpenProject}
        />
      )}
    />
  );

  renderHotKeywords = () => (
    <CategoriesTable categories={keywords} />
  );

  handleSearch = () => {
    const { navigation } = this.props;
    navigation.push('SearchDetail');
  }

  handleOpenCart = () => {
    const { navigation } = this.props;
    navigation.push('Cart');
  }

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <HomeHeader
            onOpenDrawer={() => navigation.openDrawer()}
            onSearch={this.handleSearch}
            onOpenCart={this.handleOpenCart}
          />
        )}
        animatedScroll
      >
        <HomeSection
          title="熱門分類"
          renderContent={this.renderHotCategories}
        />
        <HomeSection
          title="最新DIY項目"
          renderContent={this.renderNewProjects}
        />
        <HomeSection
          title="熱門關鍵字"
          renderContent={this.renderHotKeywords}
        />
      </TopScreenView>
    );
  }
}
