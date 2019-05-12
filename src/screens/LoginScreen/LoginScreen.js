import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon, Facebook } from 'expo';
import { Button } from 'react-native-paper';

import LoginMutation from '../../mutations/LoginMutation';

import { setTokens } from '../../helpers/credentails';
import { resetToHome } from '../../helpers/navigation';
import { showLoginFailedAlert } from '../../helpers/alert';

import { Primary } from '../../constants/Colors';

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
  };

  static defaultProps = {
  };

  handleFacebookLogin = async () => {
    try {
      const { token } = await Facebook.logInWithReadPermissionsAsync(
        config.FACEBOOK_APP_ID, { permissions: [] },
      );

      new LoginMutation({
        method: 'facebook',
        credential: token,
      }).commit()
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
          <Button
            mode="contained"
            color={Primary(900)}
            onPress={this.handleFacebookLogin}
          >
            透過 Facebook 登入
          </Button>
        </View>
      </View>
    );
  }
}
