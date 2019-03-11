import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import { Primary } from '../../constants/Colors';

import styles from './styles';

const DrawerMenuItem = ({
  renderIcon,
  title,
  onPress,
}) => (
  <TouchableHighlight
    underlayColor={Primary(300)}
    onPress={onPress}
  >
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

DrawerMenuItem.propTypes = {
  renderIcon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

DrawerMenuItem.defaultProps = {
  onPress: () => {},
};

export default DrawerMenuItem;
