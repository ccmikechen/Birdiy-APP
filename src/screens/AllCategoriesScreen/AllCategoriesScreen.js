import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-navigation';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import SelectableCategoriesTable from '../../components/SelectableCategoriesTable';

import styles from './styles';

export default class AllCategoriesScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      categories: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string,
          }),
        })),
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  handleSelect = (index) => {
    const { navigation } = this.props;
    const category = this.getCategory(index);

    navigation.navigate('Projects', { categories: [category] });
  };

  getCategories = () => {
    const { query } = this.props;

    return query && query.categories.edges.map(({ node }) => node);
  };

  getCategory = (index) => {
    const categories = this.getCategories();
    return (categories
            && categories[index]
            && categories[index].name) || null;
  };

  render() {
    const { navigation, loading } = this.props;
    const categories = this.getCategories();

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('allCategories.title')}
          />
        )}
        fullScreen
        loading={loading}
      >
        <ScrollView style={styles.container}>
          <SelectableCategoriesTable
            categories={categories}
            onSelect={this.handleSelect}
          />
        </ScrollView>
      </TopScreenView>
    );
  }
}
