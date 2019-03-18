import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const MoreButton = ({
  text,
  onPress,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

MoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

MoreButton.defaultProps = {
  onPress: () => {},
};

export default MoreButton;
