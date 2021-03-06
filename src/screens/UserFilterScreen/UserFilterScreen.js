import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';

export default class UserFilterScreen extends Component {
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
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="用戶篩選"
          />
        )}
      />
    );
  }
}
