import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
} from 'react-native';

import NormalTopHeader from '../../components/NormalTopHeader';
import HomeSection from '../../components/HomeSection';
import ExtensibleSectionContent from '../../components/ExtensibleSectionContent';
import CategoriesTable from '../../components/CategoriesTable';
import ProjectThumbnailsTable from '../../components/ProjectThumbnailsTable';

import styles from './styles';

import { categories, projects } from './mocks';

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

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <NormalTopHeader
          title="首頁"
          onOpenDrawer={() => navigation.openDrawer()}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <HomeSection
            title="熱門分類"
            renderContent={this.renderHotCategories}
          />
          <HomeSection
            title="最新DIY"
            renderContent={this.renderNewProjects}
          />
        </ScrollView>
      </View>
    );
  }
}
