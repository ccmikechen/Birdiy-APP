import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

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
