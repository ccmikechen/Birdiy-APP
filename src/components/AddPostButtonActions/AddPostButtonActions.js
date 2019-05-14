import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

export default class AddPostButtonActions extends Component {
  static propTypes = {
    onAddPost: PropTypes.func,
    onAddProject: PropTypes.func,
  };

  static defaultProps = {
    onAddPost: () => {},
    onAddProject: () => {},
  };

  show = () => {
    this.actionSheet.show();
  };

  handlePress = (index) => {
    const { onAddPost, onAddProject } = this.props;

    switch (index) {
      case 0:
        onAddProject();
        break;
      case 1:
        onAddPost();
        break;
      default:
    }
  };

  render() {
    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={['新增專案', '新增投稿', '取消']}
        cancelButtonIndex={2}
        onPress={this.handlePress}
      />
    );
  }
}
