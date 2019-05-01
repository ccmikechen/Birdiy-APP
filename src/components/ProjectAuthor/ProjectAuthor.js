import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import FollowUserButton from '../FollowUserButton';

import { DEFAULT_PROFILE } from '../../images';

import styles from './styles';

const ProjectAuthor = ({
  author,
  onUserPress,
  onFollow,
  onUnfollow,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.userImageContainer}
      onPress={() => onUserPress(author.id)}
    >
      <Image
        style={styles.userImage}
        source={{ uri: author.image }}
        defaultSource={DEFAULT_PROFILE}
      />
    </TouchableOpacity>
    <View style={styles.infoContainer}>
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>
          {author.name}
        </Text>
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.statistics}>
          {`${author.projectCount} 專案．${author.followerCount} 跟隨`}
        </Text>
      </View>
    </View>
    <View>
      <FollowUserButton
        following={author.following}
        onFollow={() => onFollow(author.id)}
        onUnfollow={() => onUnfollow(author.id)}
      />
    </View>
  </View>
);

ProjectAuthor.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    following: PropTypes.bool.isRequired,
    followerCount: PropTypes.number.isRequired,
    projectCount: PropTypes.number.isRequired,
  }).isRequired,
  onUserPress: PropTypes.func,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func,
};

ProjectAuthor.defaultProps = {
  onUserPress: () => {},
  onFollow: () => {},
  onUnfollow: () => {},
};

export default ProjectAuthor;
