import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

import styles from './styles';

const BasicHeader = ({
  leftButton,
  centerComponent,
  rightButton,
}) => (
  <View style={styles.container}>
    {leftButton && (
      <View style={styles.leftButtonContainer}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={leftButton.onPress}
        >
          <Icon.MaterialIcons
            name={leftButton.icon}
            size={30}
            color={leftButton.color || Colors.headerIcon}
          />
        </TouchableOpacity>
      </View>
    )}
    <View style={styles.centerComponentContainer}>
      {
        typeof centerComponent === 'function'
          ? centerComponent() : (
            <Text style={[styles.centerText, centerComponent.style]}>
              {centerComponent.title}
            </Text>
          )
      }
    </View>
    {rightButton && (
      <View style={styles.rightButtonContainer}>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={rightButton.onPress}
        >
          <Icon.MaterialIcons
            name={rightButton.icon}
            size={30}
            color={rightButton.color || Colors.headerIcon}
          />
        </TouchableOpacity>
      </View>
    )}
  </View>
);

BasicHeader.propTypes = {
  leftButton: PropTypes.shape({
    icon: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
  }),
  centerComponent: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      style: Text.propTypes.style,
    }),
    PropTypes.func,
  ]),
  rightButton: PropTypes.shape({
    icon: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
  }),
};

BasicHeader.defaultProps = {
  leftButton: null,
  centerComponent: null,
  rightButton: null,
};

export default BasicHeader;
