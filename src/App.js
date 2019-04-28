import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
} from 'expo';
import { MenuProvider } from 'react-native-popup-menu';

import AppNavigator from './navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

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

  render() {
    const { isLoadingComplete } = this.state;

    return isLoadingComplete ? (
      <View style={styles.container}>
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
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
