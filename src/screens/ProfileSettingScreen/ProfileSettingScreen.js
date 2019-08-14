import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import i18n from 'i18n-js';

import SimpleScreenView from '../../components/SimpleScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProfileSetting from '../../components/ProfileSetting';

import EditProfileMutation from '../../mutations/EditProfileMutation';

import { showEditProfileFailedMessage } from '../../helpers/toast';

export default class ProfileSettingScreen extends Component {
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
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    query: null,
  };

  state = {
    initialized: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { initialized } = prevState;

    if (!query || initialized) {
      return null;
    }

    const { viewer } = query;

    return {
      initialized: true,
      profile: {
        id: viewer.id,
        name: viewer.name,
        image: viewer.image,
      },
    };
  }

  handleChange = (data) => {
    const { profile } = this.state;
    this.setState({ profile: { ...profile, ...data } });
  };

  handleSave = () => {
    const { navigation, screenProps: { spinner } } = this.props;
    const { profile } = this.state;

    const mutation = new EditProfileMutation(profile)
      .setHook(spinner, i18n.t('general.saving'));

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handleSavingError();

          return;
        }
        navigation.goBack();
      })
      .catch(this.handleSavingError);
  };

  handleSavingError = () => {
    showEditProfileFailedMessage();
  };

  render() {
    const { navigation } = this.props;
    const { profile } = this.state;

    return (
      <SimpleScreenView
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('settings.profile.title')}
            rightButton={{
              icon: 'save',
              color: '#666666',
              onPress: this.handleSave,
            }}
          />
        )}
        fullScreen
      >
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          enableOnAndroid
        >
          <ProfileSetting
            profile={profile}
            onChange={this.handleChange}
          />
        </KeyboardAwareScrollView>
      </SimpleScreenView>
    );
  }
}
