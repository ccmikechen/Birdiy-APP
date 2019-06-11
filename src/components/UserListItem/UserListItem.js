import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import Ripple from 'react-native-material-ripple';
import { isEqual } from 'lodash';

export default class UserListItem extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    onPress: () => () => {},
  };

  shoudComponentUpdate(nextProps) {
    const { user } = this.props;

    return !isEqual(user, nextProps.user);
  }

  render() {
    const { user, onPress } = this.props;

    return (
      <ListItem
        Component={Ripple}
        leftAvatar={{ source: { uri: user.image } }}
        title={user.name}
        onPress={() => onPress(user)}
        bottomDivider
      />
    );
  }
}
