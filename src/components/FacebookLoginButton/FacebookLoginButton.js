import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, ViewPropTypes,
} from 'react-native';
import { Surface, TouchableRipple } from 'react-native-paper';
import i18n from 'i18n-js';

import Colors from '../../constants/Colors';

import { FACEBOOK_ICON } from '../../images';

import styles from './styles';

const FacebookLoginButton = ({ style, onPress }) => (
  <Surface style={[styles.container, style]}>
    <TouchableRipple
      style={styles.button}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          <Image
            source={FACEBOOK_ICON}
            style={styles.icon}
            backgroundColor={Colors.facebook}
            tintColor="#ffffff"
          />
        </View>
        <Text style={styles.text}>
          {i18n.t('login.facebook')}
        </Text>
      </View>
    </TouchableRipple>
  </Surface>
);

FacebookLoginButton.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
};

FacebookLoginButton.defaultProps = {
  style: {},
  onPress: () => {},
};

export default FacebookLoginButton;
