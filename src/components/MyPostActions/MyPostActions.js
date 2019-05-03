import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

export default class MyPostActions extends Component {
  static propTypes = {
    onEditPost: PropTypes.func,
    onDeletePost: PropTypes.func,
  };

  static defaultProps = {
    onEditPost: () => {},
    onDeletePost: () => {},
  };

  show = (post) => {
    this.post = post;
    this.actionSheet.show();
  };

  handlePress = (index) => {
    const { onEditPost, onDeletePost } = this.props;

    switch (index) {
      case 0:
        onEditPost(this.post);
        break;
      case 1:
        onDeletePost(this.post);
        break;
      default:
    }
  };

  render() {
    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={['編輯投稿', '刪除投稿', '取消']}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={this.handlePress}
      />
    );
  }
}
