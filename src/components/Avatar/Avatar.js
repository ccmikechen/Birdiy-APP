import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import { Icon } from 'expo';

import styles from './styles';

const Avatar = ({
  image,
  onPress,
  size,
  borderRadius,
}) => {
  const style = { width: size, height: size, borderRadius };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
    >
      {image ? (
        <Image
          style={[styles.image, style]}
          source={{ uri: image }}
        />
      ) : (
        <Icon.MaterialIcons
          name="person"
          size={size * 0.8}
          color="#ffffff"
        />
      )}
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.number,
  borderRadius: PropTypes.number,
};

Avatar.defaultProps = {
  image: null,
  onPress: () => {},
  size: 50,
  borderRadius: 25,
};

export default Avatar;
