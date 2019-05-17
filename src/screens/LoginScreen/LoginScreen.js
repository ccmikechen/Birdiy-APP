import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon, Facebook } from 'expo';
import { SocialIcon } from 'react-native-elements';
import i18n from 'i18n-js';

import LoginMutation from '../../mutations/LoginMutation';

import { setTokens } from '../../helpers/credentails';
import { resetToHome } from '../../helpers/navigation';
import { showLoginFailedAlert } from '../../helpers/alert';

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
      showLoginFailedAlert();
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
          <SocialIcon
            style={styles.loginButton}
            type="facebook"
            button
            onPress={this.handleFacebookLogin}
            title={i18n.t('facebookLogin', i18nOptions)}
          />
        </View>
      </View>
    );
  }
}
