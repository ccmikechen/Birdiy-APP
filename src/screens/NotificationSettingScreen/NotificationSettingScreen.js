import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import NotificationSetting from '../../components/NotificationSetting';

export default class NotificationSettingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    settings: {
      showNotification: true,
    },
  };

  handleItemPress = (item) => {
    switch (item) {
      case 'showNotification':
        break;
      default:
    }
  };

  handleChange = (newSettings) => {
    const { settings } = this.state;
    this.setState({ settings: { ...settings, ...newSettings } });
  };

  render() {
    const { navigation } = this.props;
    const { settings } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="通知設定"
          />
        )}
        fullScreen
      >
        <NotificationSetting
          settings={settings}
          onItemPress={this.handleItemPress}
          onChange={this.handleChange}
        />
      </TopScreenView>
    );
  }
}
