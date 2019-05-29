import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';

import styles from './styles';

const MessageView = ({ message, style, textStyle }) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.message, textStyle]}>
      {message}
    </Text>
  </View>
);

MessageView.propTypes = {
  message: PropTypes.string,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

MessageView.defaultProps = {
  message: '',
  style: {},
  textStyle: {},
};

export default MessageView;
