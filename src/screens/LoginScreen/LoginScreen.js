import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';
import * as Icon from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import i18n from 'i18n-js';

import GoogleLoginButton from '../../components/GoogleLoginButton';
import FacebookLoginButton from '../../components/FacebookLoginButton';

import LoginMutation from '../../mutations/LoginMutation';

import { setTokens } from '../../helpers/credentails';
import { resetToHome } from '../../helpers/navigation';
import { showLoginFailedMessage } from '../../helpers/toast';

import config from '../../configs';

import styles from './styles';

const LOGO = require('../../images/logo.png');

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

  componentDidMount() {
    GoogleSignIn
      .initAsync({ clientId: config.ANDROID_CLIENT_ID })
      .catch(() => {});
  }

  handleGoogleLogin = async () => {
    const { screenProps: { spinner } } = this.props;

    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();

    if (type !== 'success') {
      spinner.off();
      showLoginFailedMessage();
      return;
    }

    const mutation = new LoginMutation({
      method: 'google',
      credential: user.auth.accessToken,
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

  handleTermsPress = () => {
    WebBrowser.openBrowserAsync('https://birdiy.com/terms');
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
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.brandContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={LOGO}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {i18n.t('login.description')}
            </Text>
          </View>
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
        <View style={styles.footerContainer}>
          <Text style={styles.agreement}>
            {i18n.t('login.agreement')}
          </Text>
          <TouchableOpacity onPress={this.handleTermsPress}>
            <Text style={styles.terms}>
              {i18n.t('terms.title')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
