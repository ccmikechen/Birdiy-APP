import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="設定"
          />
        )}
        fullScreen
      >
        <Settings
          logoutButtonVisible={isLoggedIn}
          onProfile={this.handleProfile}
          onAccount={this.handleAccount}
          onDisplay={this.handleDisplay}
          onNotification={this.handleNotification}
          onAbout={this.handleAbout}
          onFeedback={this.handleFeedback}
          onLogout={this.handleLogout}
        />
      </TopScreenView>
    );
  }
}
