import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Surface } from 'react-native-paper';

import ImageView from '../ImageView';
import Avatar from '../Avatar';

import Size from '../../constants/Size';

import styles from './styles';

const FollowPostViewItem = ({ post, onPress, onUserPress }) => (
  <Surface style={styles.container}>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onPress(post.author.id, post.id)}
    >
      <ImageView
        style={styles.image}
        uri={post.thumbnail ? post.thumbnail.image : null}
        width={Size.followPostImageSize}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.authorContainer}
      onPress={() => onUserPress(post.author.id)}
    >
      <View style={styles.authorAvatarContainer}>
        <Avatar
          image={post.author.image}
          onPress={() => onUserPress(post.author.id)}
          size={Size.followPostAuthorImageSize}
          borderRadius={Size.followPostAuthorImageSize / 2}
        />
      </View>
      <View style={styles.authorNameContainer}>
        <Text style={styles.authorName}>
          {post.author.name}
        </Text>
      </View>
    </TouchableOpacity>
  </Surface>
);

FollowPostViewItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      image: PropTypes.string,
    }),
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onPress: PropTypes.func,
  onUserPress: PropTypes.func,
};

FollowPostViewItem.defaultProps = {
  onPress: () => {},
  onUserPress: () => {},
};

export default FollowPostViewItem;
