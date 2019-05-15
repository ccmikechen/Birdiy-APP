import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';


import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';

export default class CartScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('cart.title')}
          />
        )}
      />
    );
  }
}
