import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';
import i18n from 'i18n-js';

export default class ProjectOptionActions extends Component {
  static propTypes = {
    onUnpublish: PropTypes.func,
    onDelete: PropTypes.func,
    published: PropTypes.bool,
  };

  static defaultProps = {
    onUnpublish: () => {},
    onDelete: () => {},
    published: false,
  };

  show = () => {
    this.actionSheet.show();
  };

  handlePress = (index) => {
    const { published, onUnpublish, onDelete } = this.props;

    if (published) {
      switch (index) {
        case 0:
          onUnpublish();
          break;
        case 1:
          onDelete();
          break;
        default:
      }
    } else {
      switch (index) {
        case 0:
          onDelete();
          break;
        default:
      }
    }
  };

  render() {
    const { published } = this.props;
    const options = published ? [
      i18n.t('project.edit.unpublish'),
      i18n.t('project.delete.title'),
      i18n.t('general.cancel'),
    ] : [
      i18n.t('project.delete.title'),
      i18n.t('general.cancel'),
    ];

    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={options}
        cancelButtonIndex={published ? 2 : 1}
        destructiveButtonIndex={published ? 1 : 0}
        onPress={this.handlePress}
      />
    );
  }
}
