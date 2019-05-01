import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Surface } from 'react-native-paper';

import ImageView from '../ImageView';
import FollowUserButton from '../FollowUserButton';

import { DEFAULT_PROFILE } from '../../images';

import styles from './styles';

const PostSection = ({
  post,
  onUserPress,
  onFollowUser,
  onUnfollowUser,
  onPostPress,
  onSourcePress,
}) => (
  <Surface style={styles.container}>
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.userImageContainer}
        onPress={() => onUserPress(post.author.id)}
      >
        <Image
          style={styles.userImage}
          source={{ uri: post.author.image }}
          defaultSource={DEFAULT_PROFILE}
        />
      </TouchableOpacity>
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
      onPress={() => onPostPress(post.id)}
    >
      <ImageView
        style={styles.image}
        uri={post.thumbnail ? post.thumbnail.image : null}
        width={Dimensions.get('window').width - 20}
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
      image: PropTypes.string.isRequired,
      following: PropTypes.bool.isRequired,
    }).isRequired,
    insertedAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
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
  onPostPress: PropTypes.func,
  onSourcePress: PropTypes.func,
};

PostSection.defaultProps = {
  onUserPress: () => {},
  onFollowUser: () => {},
  onUnfollowUser: () => {},
  onPostPress: () => {},
  onSourcePress: () => {},
};

export default PostSection;
