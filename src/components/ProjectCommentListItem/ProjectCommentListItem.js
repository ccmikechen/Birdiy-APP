import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Avatar from '../Avatar';
import ActionMenuButton from '../ActionMenuButton';
import ProjectCommentReplyList from '../../containers/ProjectCommentReplyList';

import { timeAgo } from '../../helpers/datetime';

import styles from './styles';

const ProjectCommentListItem = ({ comment, onActionButtonPress }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.authorContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            image={comment.user.image}
            size={30}
            borderRadius={15}
          />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{comment.user.name}</Text>
        </View>
      </View>
      <ActionMenuButton onPress={() => onActionButtonPress(comment)} />
    </View>
    <View style={styles.messageContainer}>
      <Text style={styles.message}>{comment.message}</Text>
    </View>
    <View style={styles.footerContainer}>
      <Text style={styles.date}>{timeAgo(comment.insertedAt)}</Text>
    </View>
    <ProjectCommentReplyList
      comment={comment}
      onActionButtonPress={onActionButtonPress}
    />
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
  onActionButtonPress: PropTypes.func.isRequired,
};

ProjectCommentListItem.defaultProps = {
};

export default React.memo(ProjectCommentListItem);
