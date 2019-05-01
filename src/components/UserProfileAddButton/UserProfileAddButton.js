import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native-paper';

import styles from './styles';

const UserProfileAddButton = ({
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

UserProfileAddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

UserProfileAddButton.defaultProps = {
  onPress: () => {},
};

export default UserProfileAddButton;
