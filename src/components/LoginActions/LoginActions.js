import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

const DEFAULT_MESSAGE = '使用此功能前必須先登入';

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
        title="需要登入"
        message={message}
        options={['登入', '取消']}
        cancelButtonIndex={1}
        onPress={this.handlePress}
      />
    );
  }
}
