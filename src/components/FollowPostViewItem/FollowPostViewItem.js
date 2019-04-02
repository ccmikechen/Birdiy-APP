import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Surface } from 'react-native-paper';

import styles from './styles';

const FollowPostViewItem = ({ post, onPress }) => (
  <Surface style={styles.container}>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{ uri: post.image }}
      />
    </TouchableOpacity>
    <View style={styles.authorContainer}>
      <View style={styles.authorImageContainer}>
        <Image
          style={styles.authorImage}
          source={{ uri: post.author.image }}
        />
      </View>
      <View style={styles.authorNameContainer}>
        <Text style={styles.authorName}>
          {post.author.name}
        </Text>
      </View>
    </View>
  </Surface>
);

FollowPostViewItem.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onPress: PropTypes.func,
};

FollowPostViewItem.defaultProps = {
  onPress: () => {},
};

export default FollowPostViewItem;
