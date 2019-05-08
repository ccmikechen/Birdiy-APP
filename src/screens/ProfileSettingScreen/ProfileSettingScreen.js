import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProfileSetting from '../../components/ProfileSetting';

import EditProfileMutation from '../../mutations/EditProfileMutation';

import { showEditProfileFailedAlert } from '../../helpers/alert';

export default class ProfileSettingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
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
    const { navigation } = this.props;
    const { profile } = this.state;

    const mutation = new EditProfileMutation(profile);

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
    showEditProfileFailedAlert();
  };

  render() {
    const { navigation, loading } = this.props;
    const { profile } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="編輯個人檔案"
            rightButton={{
              icon: 'save',
              color: '#666666',
              onPress: this.handleSave,
            }}
          />
        )}
        fullScreen
        loading={loading}
      >
        <ProfileSetting
          profile={profile}
          onChange={this.handleChange}
        />
      </TopScreenView>
    );
  }
}
