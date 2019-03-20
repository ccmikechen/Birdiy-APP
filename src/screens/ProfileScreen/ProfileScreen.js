import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSection from '../../components/ProfileSection';
import ProfileTabMenu from '../../components/ProfileTabMenu';

import { profile } from './mocks';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleFollowerPress = () => {
  };

  handleFollowingPress = () => {
  };

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <ProfileHeader
            onOpenDrawer={() => navigation.openDrawer()}
            onOpenSettings={() => navigation.navigate('Setting')}
          />
        )}
      >
        <ProfileSection
          profile={profile}
          onFollowerPress={this.handleFollowerPress}
          onFollowingPress={this.handleFollowingPress}
        />
        <ProfileTabMenu />
      </TopScreenView>
    );
  }
}
