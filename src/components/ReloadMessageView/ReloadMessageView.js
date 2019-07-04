import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import { Button } from 'react-native-elements';
import i18n from 'i18n-js';

import styles from './styles';

const ReloadMessageView = ({ message, onReload, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.message}>
      {message}
    </Text>
    <Button
      title={i18n.t('general.reload')}
      onPress={onReload}
      containerStyle={styles.reloadButtonContainer}
      buttonStyle={styles.reloadButton}
    />
  </View>
);

ReloadMessageView.propTypes = {
  message: PropTypes.string.isRequired,
  onReload: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

ReloadMessageView.defaultProps = {
  style: {},
};

export default ReloadMessageView;
