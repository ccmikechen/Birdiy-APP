import React, { Component } from 'react';
import { View } from 'react-native';
import { AppLoading, Linking } from 'expo';
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

  renderApp = () => {
    const { isSpinnerVisible, spinnerText } = this.state;
    const prefix = Linking.makeUrl('/');
    const AppNavigator = createAppNavigator();

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
  };

  render() {
    const { isLoadingComplete } = this.state;

    return isLoadingComplete
      ? this.renderApp()
      : (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={console.warn} // eslint-disable-line no-console
          onFinish={this.handleFinishLoading}
        />
      );
  }
}
