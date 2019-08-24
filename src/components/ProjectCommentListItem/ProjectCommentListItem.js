import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import Avatar from '../Avatar';
import ActionMenuButton from '../ActionMenuButton';
import ProjectCommentReplyList from '../../containers/ProjectCommentReplyList';
import ProjectCommentInput from '../ProjectCommentInput';

import { timeAgo } from '../../helpers/datetime';

import { Primary } from '../../constants/Colors';

import styles from './styles';

const ProjectCommentListItem = ({
  comment,
  onActionButtonPress,
  user,
  onReply,
}) => {
  const [replyInputVisible, setReplyInputVisible] = useState(false);
  const [newComment, setNewComment] = useState('');

  return (
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
        <View style={styles.replyButtonContainer}>
          <Button
            color={Primary(700)}
            onPress={() => setReplyInputVisible(true)}
          >
            {i18n.t('general.reply')}
          </Button>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{timeAgo(comment.insertedAt)}</Text>
        </View>
      </View>
      {replyInputVisible && (
        <ProjectCommentInput
          style={styles.commentInput}
          value={newComment}
          user={user}
          onChangeText={setNewComment}
          onSubmit={() => {
            onReply(newComment, comment);
            setReplyInputVisible(false);
          }}
          onCancel={() => setReplyInputVisible(false)}
          submitButtonText={i18n.t('general.comment')}
          avatarSize={25}
          initialActive
        />
      )}
      <ProjectCommentReplyList
        comment={comment}
        onActionButtonPress={onActionButtonPress}
      />
    </View>
  );
};

ProjectCommentListItem.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
  }),
  comment: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    message: PropTypes.string.isRequired,
    insertedAt: PropTypes.number.isRequired,
  }).isRequired,
  onActionButtonPress: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
};

ProjectCommentListItem.defaultProps = {
  user: null,
};

export default React.memo(ProjectCommentListItem);
