import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from './styles';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text>Profile</Text>
        </ScrollView>
      </View>
    );
  }
}
