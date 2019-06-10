import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import i18n from 'i18n-js';

import styles from './styles';

const MoreButton = ({ text, onPress }) => (
  <Button
    title={text}
    titleStyle={styles.text}
    containerStyle={styles.container}
    buttonStyle={styles.button}
    onPress={onPress}
  />
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
