/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  ViewPropTypes,
} from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';

import Colors from '../../constants/Colors';

import styles from './styles';

const rightButtonShape = PropTypes.shape({
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
});

const renderRightButton = ({
  icon, text, color, onPress, // eslint-disable-line react/prop-types
}, index = 1) => (
  <TouchableOpacity
    style={styles.rightButton}
    onPress={onPress}
    key={`rightButton-${index}`}
  >
    {
      icon ? (
        React.isValidElement(icon) ? icon : (
          <Icon.MaterialIcons
            name={icon}
            size={30}
            color={color || Colors.headerIcon}
          />
        )
      ) : (
        <Text style={[styles.buttonText, {
          color: color || Colors.headerIcon,
        }]}
        >
          {text}
        </Text>
      )
    }
  </TouchableOpacity>
);

const BasicHeader = ({
  leftButton,
  centerComponent,
  rightButton,
  style,
}) => (
  <Surface style={[styles.container, style]}>
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
    {centerComponent && (
      <View style={styles.centerComponentContainer}>
        {
          typeof centerComponent === 'function'
            ? centerComponent()
            : (
              <Text style={[styles.centerText, centerComponent.style]}>
                {centerComponent.title}
              </Text>
            )
        }
      </View>
    )}
    {rightButton && (
      <View style={styles.rightButtonContainer}>
        {
          Array.isArray(rightButton)
            ? rightButton.map(renderRightButton)
            : renderRightButton(rightButton)
        }
      </View>
    )}
  </Surface>
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
  rightButton: PropTypes.oneOfType([
    rightButtonShape,
    PropTypes.arrayOf(rightButtonShape),
  ]),
  style: ViewPropTypes.style,
};

BasicHeader.defaultProps = {
  leftButton: null,
  centerComponent: null,
  rightButton: null,
  style: {},
};

export default BasicHeader;
