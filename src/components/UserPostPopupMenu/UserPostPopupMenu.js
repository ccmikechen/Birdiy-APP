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

export default class UserPostPopupMenu extends Component {
  static propTypes = {
    onEditPost: PropTypes.func,
    onDeletePost: PropTypes.func,
  };

  static defaultProps = {
    onEditPost: () => {},
    onDeletePost: () => {},
  };

  handleSelect = (value) => {
    const { onEditPost, onDeletePost } = this.props;

    switch (value) {
      case 'editPost':
        onEditPost();
        break;
      case 'deletePost':
        onDeletePost();
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
          <MenuOption value="editPost" text="編輯投稿" />
          <MenuOption value="deletePost" text="刪除投稿" />
        </MenuOptions>
      </Menu>
    );
  }
}
