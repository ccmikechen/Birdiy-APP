import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import { Button } from 'react-native-elements';
import i18n from 'i18n-js';

import styles from './styles';

const LoginMessageView = ({ onLogin, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.message}>
      {i18n.t('login.loginRequiredMessage')}
    </Text>
    <Button
      title={i18n.t('general.login')}
      onPress={onLogin}
      containerStyle={styles.loginButtonContainer}
      buttonStyle={styles.loginButton}
    />
  </View>
);

LoginMessageView.propTypes = {
  onLogin: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

LoginMessageView.defaultProps = {
  style: {},
};

export default LoginMessageView;
