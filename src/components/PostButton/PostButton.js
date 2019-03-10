import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from 'expo';

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
      <Icon.MaterialIcons
        name="add-circle-outline"
        size={30}
        color="#ffffff"
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { color }]}>
        分享 / 投稿
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
