import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import NormalTopHeader from '../../components/NormalTopHeader';

import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <NormalTopHeader
          title="首頁"
          onOpenDrawer={() => navigation.openDrawer()}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text>Home</Text>
        </ScrollView>
      </View>
    );
  }
}
