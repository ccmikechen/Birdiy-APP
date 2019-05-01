import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'expo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { TextColor } from '../../constants/Colors';

export default class UserProjectPopupMenu extends Component {
  static propTypes = {
    onEditProject: PropTypes.func,
    onDeleteProject: PropTypes.func,
  };

  static defaultProps = {
    onEditProject: () => {},
    onDeleteProject: () => {},
  };

  handleSelect = (value) => {
    const { onEditProject, onDeleteProject } = this.props;

    switch (value) {
      case 'editProject':
        onEditProject();
        break;
      case 'deleteProject':
        onDeleteProject();
        break;
      default:
    }
  };

  render() {
    return (
      <Menu onSelect={this.handleSelect}>
        <MenuTrigger>
          <Icon.MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={TextColor.subDark}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption value="editProject" text="編輯專案" />
          <MenuOption value="deleteProject" text="刪除專案" />
        </MenuOptions>
      </Menu>
    );
  }
}
