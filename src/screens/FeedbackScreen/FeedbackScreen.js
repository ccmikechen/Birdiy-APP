import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import InputScreenView from '../../components/InputScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import FeedbackForm from '../../components/FeedbackForm';

import { showSendFeedbackSuccessMessage } from '../../helpers/toast';

const i18nOptions = { scope: 'feedback' };

export default class FeedbackScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.goBack();
    showSendFeedbackSuccessMessage();
  };

  render() {
    const { navigation } = this.props;

    return (
      <InputScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('title', i18nOptions)}
          />
        )}
        fullScreen
        keyboardOffset={0}
      >
        <FeedbackForm onSubmit={this.handleSubmit} />
      </InputScreenView>
    );
  }
}
