import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';

import Spinner from 'react-native-loading-spinner-overlay';

import createAppNavigator from './navigation/AppNavigator';

import locale from './locales';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    isSpinnerVisible: false,
    spinnerText: null,
  };

  async componentWillMount() {
    await locale.init();
    this.AppNavigator = await createAppNavigator();
  }

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
    }),
  ]);

  handleLoadingError = () => {
  };

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
    const { AppNavigator } = this;

    return isLoadingComplete ? (
      <View style={styles.container}>
        <AppNavigator
          screenProps={{
            spinner: {
              on: this.showLoadingSpinner,
              off: this.closeLoadingSpinner,
            },
          }}
        />
        <Spinner
          visible={isSpinnerVisible}
          textContent={spinnerText}
          textStyle={{ color: 'white' }}
        />
      </View>
    ) : (
      <AppLoading
        startAsync={this.loadResourcesAsync}
        onError={this.handleLoadingError}
        onFinish={this.handleFinishLoading}
      />
    );
  }
}
