import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import i18n from 'i18n-js';

import SimpleScreenView from '../../components/SimpleScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import FeedbackForm from '../../components/FeedbackForm';

import { showSendFeedbackSuccessMessage } from '../../helpers/toast';
import Feedback from '../../helpers/feedback';

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

  handleSubmit = ({ type, message }) => {
    const { navigation } = this.props;
    Feedback.send(type, message);
    navigation.goBack();
    showSendFeedbackSuccessMessage();
  };

  render() {
    const { navigation } = this.props;

    return (
      <SimpleScreenView
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('title', i18nOptions)}
          />
        )}
        fullScreen
        keyboardOffset={0}
      >
        <KeyboardAwareScrollView>
          <FeedbackForm onSubmit={this.handleSubmit} />
        </KeyboardAwareScrollView>
      </SimpleScreenView>
    );
  }
}
