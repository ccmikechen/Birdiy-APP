import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

export default class UploadImageActions extends Component {
  static propTypes = {
    onPick: PropTypes.func,
    onCamera: PropTypes.func,
  };

  static defaultProps = {
    onPick: () => {},
    onCamera: () => {},
  };

  show = () => {
    this.actionSheet.show();
  };

  handlePress = (index) => {
    const { onPick, onCamera } = this.props;

    switch (index) {
      case 0:
        onPick();
        break;
      case 1:
        onCamera();
        break;
      default:
    }
  };

  render() {
    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={['從相簿挑選', '拍攝照片', '取消']}
        cancelButtonIndex={2}
        onPress={this.handlePress}
      />
    );
  }
}
