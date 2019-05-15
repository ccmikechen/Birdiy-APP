import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from 'expo';
import i18n from 'i18n-js';

import styles from './styles';

const PostButton = ({
  color,
  backgroundColor,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, { backgroundColor }]}
    onPress={onPress}
  >
    <View style={styles.iconContainer}>
      <Icon.FontAwesome
        name="pencil-square-o"
        size={30}
        color="#ffffff"
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { color }]}>
        {i18n.t('postButton.title')}
      </Text>
    </View>
  </TouchableOpacity>
);

PostButton.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
};

PostButton.defaultProps = {
  color: '#ffffff',
  backgroundColor: '#00000',
  onPress: () => {},
};

export default PostButton;
