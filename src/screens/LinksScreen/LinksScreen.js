import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

export default class LinksScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Links</Text>
      </ScrollView>
    );
  }
}
