import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

export default class MyProjectActions extends Component {
  static propTypes = {
    onEditProject: PropTypes.func,
    onDeleteProject: PropTypes.func,
  };

  static defaultProps = {
    onEditProject: () => {},
    onDeleteProject: () => {},
  };

  show = (projectId) => {
    this.projectId = projectId;
    this.actionSheet.show();
  };

  handlePress = (index) => {
    const { onEditProject, onDeleteProject } = this.props;

    switch (index) {
      case 0:
        onEditProject(this.projectId);
        break;
      case 1:
        onDeleteProject(this.projectId);
        break;
      default:
    }
  };

  render() {
    return (
      <ActionSheet
        ref={(ref) => { this.actionSheet = ref; }}
        options={['編輯專案', '刪除專案', '取消']}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={this.handlePress}
      />
    );
  }
}
