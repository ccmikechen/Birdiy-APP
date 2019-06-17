import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, ViewPropTypes,
} from 'react-native';
import { Surface, TouchableRipple } from 'react-native-paper';
import i18n from 'i18n-js';

import styles from './styles';

const icon = require('../../images/google-icon.png');

const GoogleLoginButton = ({ style, onPress }) => (
  <Surface style={[styles.container, style]}>
    <TouchableRipple
      style={styles.button}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          <Image
            source={icon}
            style={styles.icon}
          />
        </View>
        <Text style={styles.text}>
          {i18n.t('login.google')}
        </Text>
      </View>
    </TouchableRipple>
  </Surface>
);

GoogleLoginButton.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
};

GoogleLoginButton.defaultProps = {
  style: {},
  onPress: () => {},
};

export default GoogleLoginButton;
