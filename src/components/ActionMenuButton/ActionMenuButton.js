import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

import { TextColor } from '../../constants/Colors';

const ActionMenuButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon.MaterialCommunityIcons
      name="dots-horizontal"
      size={24}
      color={TextColor.subDark}
    />
  </TouchableOpacity>
);

ActionMenuButton.propTypes = {
  onPress: PropTypes.func,
};

ActionMenuButton.defaultProps = {
  onPress: () => {},
};

export default ActionMenuButton;
