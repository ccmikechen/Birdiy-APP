import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon, Google, Facebook } from 'expo';
import { Button } from 'react-native-elements';
import i18n from 'i18n-js';

import LoginMutation from '../../mutations/LoginMutation';

import { setTokens } from '../../helpers/credentails';
import { resetToHome } from '../../helpers/navigation';
import { showLoginFailedMessage } from '../../helpers/toast';

import config from '../../configs';

import styles from './styles';

const i18nOptions = { scope: 'login' };

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    screenProps: PropTypes.shape({
      spinner: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
  };

  handleGoogleLogin = async () => {
    const { screenProps: { spinner } } = this.props;
    spinner.on();

    const { type, accessToken } = await Google.logInAsync({
      iosClientId: config.IOS_EXPO_CLIENT_ID,
      androidClientId: config.ANDROID_EXPO_CLIENT_ID,
      iosStandaloneAppClientId: config.IOS_CLIENT_ID,
      androidStandaloneAppClientId: config.ANDROID_CLIENT_ID,
    });

    if (type !== 'success') {
      spinner.off();
      showLoginFailedMessage();
      return;
    }

    const mutation = new LoginMutation({
      method: 'google',
      credential: accessToken,
    }).setHook(spinner);

    mutation.commit()
      .then(this.handleLoginResponse)
      .catch(() => {});
  };

  handleFacebookLogin = async () => {
    const { screenProps: { spinner } } = this.props;

    try {
      const { token } = await Facebook.logInWithReadPermissionsAsync(
        config.FACEBOOK_APP_ID, { permissions: [] },
      );

      const mutation = new LoginMutation({
        method: 'facebook',
        credential: token,
      }).setHook(spinner);

      mutation.commit()
        .then(this.handleLoginResponse)
        .catch(() => {});
    } catch (e) {
      spinner.off();
      showLoginFailedMessage();
    }
  };

  handleLoginResponse = async (response) => {
    const { navigation } = this.props;
    const { login: { accessToken, refreshToken } } = response;

    await setTokens(accessToken, refreshToken);
    resetToHome(navigation);
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />

        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Icon.MaterialIcons
              name="close"
              size={30}
              color="#000000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Button
            title={i18n.t('button', { ...i18nOptions, type: 'Google' })}
            containerStyle={styles.loginButtonContainer}
            buttonStyle={styles.loginButton}
            onPress={this.handleGoogleLogin}
            type="solid"
          />
          <Button
            title={i18n.t('button', { ...i18nOptions, type: 'facebook' })}
            containerStyle={styles.loginButtonContainer}
            buttonStyle={styles.loginButton}
            onPress={this.handleFacebookLogin}
            type="solid"
          />
        </View>
      </View>
    );
  }
}
