import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
  Constants,
} from 'expo';
import AppNavigator from './navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
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
        <AppNavigator />
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
