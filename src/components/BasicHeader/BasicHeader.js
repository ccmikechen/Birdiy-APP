import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { LinearGradient, Icon } from 'expo';

import styles from './styles';

const BasicHeader = ({
  leftButton,
  centerComponent,
  rightButton,
}) => (
  <LinearGradient
    style={styles.container}
    colors={['#64a1bc', '#647fbc', '#3b5998', '#192f6a']}
    start={[0, 0]}
    end={[1, 1]}
  >
    {leftButton && (
      <View style={styles.leftButtonContainer}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={leftButton.onPress}
        >
          <Icon.MaterialIcons
            name={leftButton.icon}
            size={30}
            color={leftButton.color}
          />
        </TouchableOpacity>
      </View>
    )}
    <View style={styles.centerComponentContainer}>
      {
        typeof centerComponent === 'function'
          ? centerComponent() : (
            <Text style={centerComponent.style}>
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
            color={rightButton.color}
          />
        </TouchableOpacity>
      </View>
    )}
  </LinearGradient>
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