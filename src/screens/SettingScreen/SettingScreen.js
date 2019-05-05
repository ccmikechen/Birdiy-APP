import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import Settings from '../../components/Settings';

export default class SettingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLogout = () => {
    const { navigation } = this.props;
    navigation.push('LoginModal');
  };

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="設定"
          />
        )}
        fullScreen
      >
        <Settings
          onLogout={this.handleLogout}
        />
      </TopScreenView>
    );
  }
}
