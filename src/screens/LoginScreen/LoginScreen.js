import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon, Facebook } from 'expo';
import { Button } from 'react-native-paper';

import LoginMutation from '../../mutations/LoginMutation';

import * as Credentials from '../../helpers/credentails';

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
    const appID = process.env.FACEBOOK_APP_ID;

    try {
      const { token } = await Facebook.logInWithReadPermissionsAsync(
        appID, { permissions: [] },
      );

      new LoginMutation({
        method: 'facebook',
        credential: token,
      }).commit()
        .then(this.handleLoginResponse)
        .catch(() => {});
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  };

  handleLoginResponse = async ({ response }) => {
    const { login: { accessToken, refreshToken } } = response;

    await Credentials.setTokens(accessToken, refreshToken);
  };

  handleLogout = async () => {
    await Credentials.clearTokens();
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
          <Button onPress={this.handleFacebookLogin}>Login</Button>
          <Button onPress={this.handleLogout}>Logout</Button>
        </View>
      </View>
    );
  }
}
