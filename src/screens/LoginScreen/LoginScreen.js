import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Google, Facebook } from 'expo';
import * as Icon from '@expo/vector-icons';

import GoogleLoginButton from '../../components/GoogleLoginButton';
import FacebookLoginButton from '../../components/FacebookLoginButton';

import LoginMutation from '../../mutations/LoginMutation';

import { setTokens } from '../../helpers/credentails';
import { resetToHome } from '../../helpers/navigation';
import { showLoginFailedMessage } from '../../helpers/toast';

import config from '../../configs';

import styles from './styles';

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
          <GoogleLoginButton
            style={styles.loginButtonContainer}
            onPress={this.handleGoogleLogin}
          />
          <FacebookLoginButton
            style={styles.loginButtonContainer}
            onPress={this.handleFacebookLogin}
          />
        </View>
      </View>
    );
  }
}
