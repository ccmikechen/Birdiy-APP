import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from './styles';

export default class TimelineScreen extends Component {
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
          <Text>Timeline</Text>
        </ScrollView>
      </View>
    );
  }
}
