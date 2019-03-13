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
    }).isRequired,
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
      onMorePress={() => {}}
      renderContent={() => (
        <ProjectThumbnailsTable projects={projects} />
      )}
    />
  );

  renderHotKeywords = () => (
    <CategoriesTable categories={keywords} />
  );

  handleSearch = () => {
  }

  handleOpenCart = () => {
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
          title="最新DIY"
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
