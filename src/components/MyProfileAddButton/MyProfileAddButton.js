import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native-paper';

import styles from './styles';

const MyProfileAddButton = ({
  text,
  onPress,
}) => (
  <Button
    style={styles.container}
    icon="add"
    mode="outlined"
    color="#ffffff"
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </Button>
);

MyProfileAddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

MyProfileAddButton.defaultProps = {
  onPress: () => {},
};

export default MyProfileAddButton;
