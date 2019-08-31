import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';
import i18n from 'i18n-js';

export default class ProjectCommentActions extends Component {
  static propTypes = {
    onReport: PropTypes.func,
  };

  static defaultProps = {
    onReport: () => {},
  };

  state = {
    comment: null,
  };

  show = (comment) => {
    this.setState({ comment }, () => {
      this.actionSheet.show();
    });
  };

  handlePress = (index) => {
    const { comment } = this.state;
    const { onReport } = this.props;

    switch (index) {
      case 0:
        onReport(comment.id);
        break;
      default:
    }
  };

  render() {
    const { comment } = this.state;

    return comment ? (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={[
          i18n.t('general.report'),
          i18n.t('general.cancel'),
        ]}
        cancelButtonIndex={1}
        onPress={this.handlePress}
      />
    ) : null;
  }
}
