import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
} from 'expo';

import Spinner from 'react-native-loading-spinner-overlay';

import createAppNavigator from './navigation/AppNavigator';

import { initI18n } from './locales';

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
  };

  async componentWillMount() {
    await initI18n();
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

  showLoadingSpinner = () => {
    this.setState({ isSpinnerVisible: true });
  };

  closeLoadingSpinner = () => {
    this.setState({ isSpinnerVisible: false });
  };

  render() {
    const {
      isLoadingComplete,
      isSpinnerVisible,
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
