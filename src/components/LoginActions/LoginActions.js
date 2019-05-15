import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';
import i18n from 'i18n-js';

const DEFAULT_MESSAGE = i18n.t('loginActions.defaultMessage');

export default class LoginActions extends Component {
  static propTypes = {
    onLogin: PropTypes.func,
  };

  static defaultProps = {
    onLogin: () => {},
  };

  state = {
    message: DEFAULT_MESSAGE,
  };

  show = (message = DEFAULT_MESSAGE) => {
    this.setState({ message }, () => {
      this.actionSheet.show();
    });
  };

  handlePress = (index) => {
    const { onLogin } = this.props;

    switch (index) {
      case 0:
        onLogin(this.post);
        break;
      default:
    }
  };

  render() {
    const { message } = this.state;

    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        title={i18n.t('loginActions.title')}
        message={message}
        options={[i18n.t('general.login'), i18n.t('general.cancel')]}
        cancelButtonIndex={1}
        onPress={this.handlePress}
      />
    );
  }
}
