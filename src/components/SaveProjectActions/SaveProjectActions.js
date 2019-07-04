import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';
import i18n from 'i18n-js';

export default class SaveProjectActions extends Component {
  static propTypes = {
    onSave: PropTypes.func,
    onSaveAndPublish: PropTypes.func,
    published: PropTypes.bool,
  };

  static defaultProps = {
    onSave: () => {},
    onSaveAndPublish: () => {},
    published: false,
  };

  show = () => {
    this.actionSheet.show();
  };

  handlePress = (index) => {
    const { published, onSave, onSaveAndPublish } = this.props;

    switch (index) {
      case 0:
        onSave();
        break;
      case 1:
        if (!published) {
          onSaveAndPublish();
        }
        break;
      default:
    }
  };

  render() {
    const { published } = this.props;
    const options = published ? [
      i18n.t('general.save'),
      i18n.t('general.cancel'),
    ] : [
      i18n.t('general.save'),
      i18n.t('project.edit.saveAndPublish'),
      i18n.t('general.cancel'),
    ];

    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={options}
        cancelButtonIndex={published ? 1 : 2}
        onPress={this.handlePress}
      />
    );
  }
}
