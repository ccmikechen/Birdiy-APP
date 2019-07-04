import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import Settings from '../../components/Settings';

import * as Credentials from '../../helpers/credentails';
import { resetToHome } from '../../helpers/navigation';

export default class SettingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    isLoggedIn: false,
  };

  async componentDidMount() {
    const isLoggedIn = await Credentials.isLoggedIn();
    this.setState({ isLoggedIn });
  }

  handleItemPress = (item) => {
    const { navigation } = this.props;
    const { isLoggedIn } = this.state;

    switch (item) {
      case 'profile':
        if (!isLoggedIn) {
          navigation.navigate('LoginModal');
          break;
        }

        this.handleProfile();
        break;
      case 'account':
        if (!isLoggedIn) {
          navigation.navigate('LoginModal');
          break;
        }

        this.handleAccount();
        break;
      case 'display':
        this.handleDisplay();
        break;
      case 'notification':
        if (!isLoggedIn) {
          navigation.navigate('LoginModal');
          break;
        }

        this.handleNotification();
        break;
      case 'about':
        this.handleAbout();
        break;
      case 'feedback':
        this.handleFeedback();
        break;
      case 'logout':
        this.handleLogout();
        break;
      default:
    }
  };

  handleProfile = () => {
    const { navigation } = this.props;
    navigation.push('ProfileSettingModal');
  };

  handleAccount = () => {
    const { navigation } = this.props;
    navigation.push('AccountSettingModal');
  };

  handleDisplay = () => {
    const { navigation } = this.props;
    navigation.push('DisplaySettingModal');
  };

  handleNotification = () => {
    const { navigation } = this.props;
    navigation.push('NotificationSettingModal');
  };

  handleAbout = () => {
    const { navigation } = this.props;
    navigation.push('AboutModal');
  };

  handleFeedback = () => {
    const { navigation } = this.props;
    navigation.push('FeedbackModal');
  };

  handleLogout = async () => {
    const { navigation } = this.props;
    await Credentials.clearTokens();
    resetToHome(navigation);
  };

  render() {
    const { navigation } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <TopScreenView
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('settings.title')}
          />
        )}
        fullScreen
      >
        <Settings
          logoutButtonVisible={isLoggedIn}
          onItemPress={this.handleItemPress}
        />
      </TopScreenView>
    );
  }
}
