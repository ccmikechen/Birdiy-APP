import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
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

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalTopHeader
            title="首頁"
            onOpenDrawer={() => navigation.openDrawer()}
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
