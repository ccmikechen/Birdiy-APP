import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import i18n from 'i18n-js';

import Avatar from '../Avatar';
import FollowUserButton from '../FollowUserButton';

import Size from '../../constants/Size';

import styles from './styles';

const i18nOptions = { scope: 'project.author' };

const ProjectAuthor = ({
  author,
  onUserPress,
  onFollow,
  onUnfollow,
}) => (
  <View style={styles.container}>
    <Avatar
      image={author.image}
      onPress={() => onUserPress(author.id)}
      size={Size.projectProfileImageSize}
      borderRadius={Size.projectProfileImageSize / 2}
    />
    <View style={styles.infoContainer}>
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>
          {author.name}
        </Text>
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.statistics}>
          {`${author.projectCount} ${i18n.t('projects', i18nOptions)}．${author.followerCount} ${i18n.t('followers', i18nOptions)}`}
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
