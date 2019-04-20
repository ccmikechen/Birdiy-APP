import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Surface } from 'react-native-paper';

import ImageView from '../ImageView';

import Size from '../../constants/Size';

import styles from './styles';

const FollowPostViewItem = ({ post, onPress }) => (
  <Surface style={styles.container}>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onPress(post.id)}
    >
      <ImageView
        style={styles.image}
        uri={post.thumbnail ? post.thumbnail.image : null}
        width={Size.followPostImageSize}
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
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      image: PropTypes.string,
    }),
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
