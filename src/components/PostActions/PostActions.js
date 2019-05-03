import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

export default class PostActions extends Component {
  static propTypes = {
    onFollowUser: PropTypes.func,
    onUnfollowUser: PropTypes.func,
  };

  static defaultProps = {
    onFollowUser: () => {},
    onUnfollowUser: () => {},
  };

  state = {
    post: null,
  };

  show = (post) => {
    this.setState({ post }, () => {
      this.actionSheet.show();
    });
  };

  handlePress = (index) => {
    const { post } = this.state;
    const { onFollowUser, onUnfollowUser } = this.props;

    switch (index) {
      case 0:
        if (post.author.following) {
          onUnfollowUser(post.author.id);
        } else {
          onFollowUser(post.author.id);
        }
        break;
      default:
    }
  };

  render() {
    const { post } = this.state;

    return post ? (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={[post.author.following ? '取消跟隨' : '跟隨', '取消']}
        cancelButtonIndex={1}
        onPress={this.handlePress}
      />
    ) : null;
  }
}
