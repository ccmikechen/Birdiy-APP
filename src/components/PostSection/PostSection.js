import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Surface } from 'react-native-paper';

import ImageView from '../ImageView';
import FollowUserButton from '../FollowUserButton';
import Avatar from '../Avatar';

import Size from '../../constants/Size';

import styles from './styles';

const PostSection = ({
  post,
  onUserPress,
  onFollowUser,
  onUnfollowUser,
  onImagePress,
  onSourcePress,
}) => (
  <Surface style={styles.container}>
    <View style={styles.profileContainer}>
      <Avatar
        image={post.author.image}
        onPress={() => onUserPress(post.author.id)}
        size={Size.postProfileImageSize}
        borderRadius={Size.postProfileImageSize / 2}
      />
      <View style={styles.infoContainer}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>
            {post.author.name}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {post.insertedAt}
          </Text>
        </View>
      </View>
      <View style={styles.followButtonContainer}>
        <FollowUserButton
          following={post.author.following}
          onFollow={() => onFollowUser(post.author.id)}
          onUnfollow={() => onUnfollowUser(post.author.id)}
        />
      </View>
    </View>
    <View style={styles.messageContainer}>
      <Text style={styles.message}>
        {post.message}
      </Text>
    </View>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onImagePress(post.id)}
    >
      <ImageView
        style={styles.image}
        uri={post.thumbnail ? post.thumbnail.image : null}
        width={Dimensions.get('window').width - 20}
        amount={post.photosCount}
      />
    </TouchableOpacity>
    {
      post.relatedProjectType === 'project' ? (
        <TouchableOpacity
          style={styles.sourceContainer}
          onPress={() => onSourcePress(post.relatedProject.id)}
        >
          <Text style={styles.source}>
            {post.relatedProject.name}
          </Text>
        </TouchableOpacity>

      ) : (
        <View style={styles.sourceContainer}>
          <Text style={styles.source}>
            {post.relatedProjectName}
          </Text>
        </View>
      )
    }
  </Surface>
);

PostSection.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      following: PropTypes.bool.isRequired,
    }).isRequired,
    insertedAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    photosCount: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }),
    relatedProjectType: PropTypes.string.isRequired,
    relatedProject: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    relatedProjectName: PropTypes.string,
  }).isRequired,
  onUserPress: PropTypes.func,
  onFollowUser: PropTypes.func,
  onUnfollowUser: PropTypes.func,
  onImagePress: PropTypes.func,
  onSourcePress: PropTypes.func,
};

PostSection.defaultProps = {
  onUserPress: () => {},
  onFollowUser: () => {},
  onUnfollowUser: () => {},
  onImagePress: () => {},
  onSourcePress: () => {},
};

export default PostSection;
