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

const rightButtonShape = PropTypes.shape({
  icon: PropTypes.string,
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
        <Icon.MaterialIcons
          name={icon}
          size={30}
          color={color || Colors.headerIcon}
        />
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
    {centerComponent && (
      <View style={[
        styles.centerComponentContainer,
        rightButton ? null : styles.centerComponentPadding,
      ]}
      >
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
  rightButton: PropTypes.oneOfType([
    rightButtonShape,
    PropTypes.arrayOf(rightButtonShape),
  ]),
};

BasicHeader.defaultProps = {
  leftButton: null,
  centerComponent: null,
  rightButton: null,
};

export default BasicHeader;
