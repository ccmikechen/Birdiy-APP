import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

import styles from './styles';

const UserProfileAddButton = ({ text, onPress }) => (
  <Button
    title={text}
    titleStyle={styles.text}
    containerStyle={styles.container}
    buttonStyle={styles.button}
    icon={{
      name: 'add',
      size: 20,
      color: '#ffffff',
    }}
    onPress={onPress}
  />
);

UserProfileAddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

UserProfileAddButton.defaultProps = {
  onPress: () => {},
};

export default UserProfileAddButton;
