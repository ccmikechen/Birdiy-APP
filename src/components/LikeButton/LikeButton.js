import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

import styles from './styles';

const LikeButton = ({
  color, size, onPress, liked,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Icon.MaterialIcons
      name={liked ? 'favorite' : 'favorite-border'}
      size={size}
      color={color}
    />
  </TouchableOpacity>
);

LikeButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func,
  liked: PropTypes.bool,
};

LikeButton.defaultProps = {
  color: Colors.like,
  size: 30,
  onPress: () => {},
  liked: false,
};

export default LikeButton;
