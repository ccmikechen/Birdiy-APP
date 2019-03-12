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

import styles from './styles';

import { ICON } from '../../images';

const categories = [{
  name: '木工',
}, {
  name: '手工',
  image: ICON,
}, {
  name: '刀工',
}, {
  name: '白工',
  image: ICON,
}, {
  name: '童工',
}, {
  name: '走路工',
  image: ICON,
}, {
  name: '童工',
}, {
  name: '走路工',
  image: ICON,
}, {
  name: '童工',
}, {
  name: '走路工',
  image: ICON,
}, {
  name: '童工',
}, {
  name: '走路工',
  image: ICON,
}];

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
        </ScrollView>
      </View>
    );
  }
}
