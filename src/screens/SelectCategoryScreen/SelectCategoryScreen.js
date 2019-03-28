import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import SelectableCategoriesTable from '../../components/SelectableCategoriesTable';

import styles from './styles';

export default class SelectCategoryScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleOnSelect = (index) => {
    const { navigation } = this.props;
    const onSelect = navigation.getParam('onSelect');
    onSelect(index);
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const categories = navigation.getParam('categories');

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="選擇分類"
          />
        )}
        fullScreen
      >
        <ScrollView style={styles.container}>
          <SelectableCategoriesTable
            categories={categories}
            onSelect={this.handleOnSelect}
          />
        </ScrollView>
      </TopScreenView>
    );
  }
}
