import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import i18n from 'i18n-js';

import styles from './styles';

const MoreButton = ({ text, onPress }) => (
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
  text: PropTypes.string,
  onPress: PropTypes.func,
};

MoreButton.defaultProps = {
  text: i18n.t('general.more'),
  onPress: () => {},
};

export default MoreButton;
