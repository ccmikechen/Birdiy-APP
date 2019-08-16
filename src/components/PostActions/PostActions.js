import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';
import i18n from 'i18n-js';

export default class PostActions extends Component {
  static propTypes = {
    onFollowUser: PropTypes.func,
    onUnfollowUser: PropTypes.func,
    onReport: PropTypes.func,
  };

  static defaultProps = {
    onFollowUser: () => {},
    onUnfollowUser: () => {},
    onReport: () => {},
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
    const { onFollowUser, onUnfollowUser, onReport } = this.props;

    switch (index) {
      case 0:
        if (post.author.following) {
          onUnfollowUser(post.author.id);
        } else {
          onFollowUser(post.author.id);
        }
        break;
      case 1:
        onReport(post.id);
        break;
      default:
    }
  };

  render() {
    const { post } = this.state;

    return post ? (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={[
          post.author.following
            ? i18n.t('followUserActions.unfollow')
            : i18n.t('followUserActions.follow'),
          i18n.t('general.report'),
          i18n.t('general.cancel'),
        ]}
        cancelButtonIndex={2}
        destructiveButtonIndex={post.author.following && 0}
        onPress={this.handlePress}
      />
    ) : null;
  }
}
