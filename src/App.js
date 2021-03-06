import React, { Component } from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';

import Spinner from 'react-native-loading-spinner-overlay';

import createAppNavigator from './navigation/AppNavigator';

import locale from './locales';

import { preloadImages } from './images';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    isSpinnerVisible: false,
    spinnerText: null,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      ...preloadImages,
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
    }),
    locale.init(),
  ]);

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  showLoadingSpinner = (message = null) => {
    this.setState({
      isSpinnerVisible: true,
      spinnerText: message,
    });
  };

  closeLoadingSpinner = () => {
    this.setState({ isSpinnerVisible: false, spinnerText: null });
  };

  render() {
    const {
      isLoadingComplete,
      isSpinnerVisible,
      spinnerText,
    } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={console.warn} // eslint-disable-line no-console
          onFinish={this.handleFinishLoading}
        />
      );
    }

    if (!this.AppNavigator) {
      this.AppNavigator = createAppNavigator();
    }
    const { AppNavigator } = this;

    const prefix = /https:\/\/birdiy.com\/|birdiy:\/\//;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppNavigator
          screenProps={{
            spinner: {
              on: this.showLoadingSpinner,
              off: this.closeLoadingSpinner,
            },
          }}
          uriPrefix={prefix}
        />
        <Spinner
          visible={isSpinnerVisible}
          textContent={spinnerText}
          textStyle={{ color: 'white' }}
        />
      </View>
    );
  }
}
