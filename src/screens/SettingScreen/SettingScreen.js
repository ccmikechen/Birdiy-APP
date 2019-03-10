import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

export default class SettingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Setting</Text>
      </ScrollView>
    );
  }
}
