import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Button, Surface } from 'react-native-paper';

import ImageView from '../ImageView';

import { DEFAULT_PROFILE } from '../../images';

import styles from './styles';

const PostSection = ({
  post,
  onUserPress,
  onFollowPress,
  onPostPress,
  onSourcePress,
}) => (
  <Surface style={styles.container}>
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.userImageContainer}
        onPress={onUserPress}
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
        <Button
          icon="add"
          mode="outlined"
          color="#222222"
          onPress={onFollowPress}
        >
          跟隨
        </Button>
      </View>
    </View>
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={onPostPress}
    >
      <Text style={styles.message}>
        {post.message}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={onPostPress}
    >
      <ImageView
        style={styles.image}
        uri={post.thumbnail ? post.thumbnail.image : null}
        width={Dimensions.get('window').width - 20}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.sourceContainer}
      onPress={onSourcePress}
    >
      <Text style={styles.source}>
        {post.relatedProject.name}
      </Text>
    </TouchableOpacity>
  </Surface>
);

PostSection.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
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
  onFollowPress: PropTypes.func,
  onPostPress: PropTypes.func,
  onSourcePress: PropTypes.func,
};

PostSection.defaultProps = {
  onUserPress: () => {},
  onFollowPress: () => {},
  onPostPress: () => {},
  onSourcePress: () => {},
};

export default PostSection;
