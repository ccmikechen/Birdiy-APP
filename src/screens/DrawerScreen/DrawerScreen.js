import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class DrawerScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      closeDrawer: PropTypes.func.isRequired,
    }).isRequired,
  }

  renderItem = screen => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={this.navigateToScreen(screen)}
    >
      <Text>
        { screen }
      </Text>
    </TouchableOpacity>
  )

  navigateToScreen = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
    navigation.closeDrawer();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.renderItem('Home') }
        { this.renderItem('Links') }
        { this.renderItem('Setting') }
      </ScrollView>
    );
  }
}
