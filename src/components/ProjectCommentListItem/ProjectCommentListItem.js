import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

import ActionMenuButton from '../ActionMenuButton';

import { timeAgo } from '../../helpers/datetime';

import styles from './styles';

const ProjectCommentListItem = ({
  comment: {
    user, message, insertedAt,
  },
}) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.authorContainer}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            source={{ uri: user.image }}
            size={30}
          />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </View>
      <ActionMenuButton />
    </View>
    <View style={styles.messageContainer}>
      <Text style={styles.message}>{message}</Text>
    </View>
    <View style={styles.footerContainer}>
      <Text style={styles.date}>{timeAgo(insertedAt)}</Text>
    </View>
  </View>
);

ProjectCommentListItem.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    message: PropTypes.string.isRequired,
    insertedAt: PropTypes.number.isRequired,
  }).isRequired,
};

ProjectCommentListItem.defaultProps = {
};

export default ProjectCommentListItem;
