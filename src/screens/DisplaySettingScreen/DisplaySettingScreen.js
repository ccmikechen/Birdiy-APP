import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import DisplaySetting from '../../components/DisplaySetting';

export default class DisplaySettingScreen extends Component {
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
      interfaceLanguage: '繁體中文',
    },
  };

  handleItemPress = (item) => {
    switch (item) {
      case 'interfaceLanguage':
        break;
      case 'displayProjectsLanguage':
        break;
      case 'displayPostsLanguage':
        break;
      default:
    }
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
            title="顯示設定"
          />
        )}
        fullScreen
      >
        <DisplaySetting
          settings={settings}
          onItemPress={this.handleItemPress}
        />
      </TopScreenView>
    );
  }
}
