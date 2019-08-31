/* eslint-disable no-underscore-dangle */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, TouchableOpacity, Text,
} from 'react-native';
import i18n from 'i18n-js';

import ProjectCommentInput from '../ProjectCommentInput';
import ProjectCommentListItem from '../../containers/ProjectCommentListItem';

import styles from './styles';

const ProjectCommentList = (props) => {
  const {
    user,
    comments,
    loadMore,
    canLoadMore,
    onActionButtonPress,
    onComment,
    onRequestLogin,
  } = props;
  const [newComment, setNewComment] = useState('');

  return (
    <View style={styles.container}>
      <ProjectCommentInput
        style={styles.commentInput}
        value={newComment}
        user={user}
        onChangeText={setNewComment}
        onSubmit={() => onComment(newComment)}
        onRequestLogin={onRequestLogin}
        submitButtonText={i18n.t('general.comment')}
      />
      <FlatList
        {...props}
        data={comments}
        renderItem={({ item }) => (
          <ProjectCommentListItem
            comment={item}
            onActionButtonPress={onActionButtonPress}
            user={user}
            onReply={onComment}
            onRequestLogin={onRequestLogin}
          />
        )}
        keyExtractor={item => item.__id}
      />
      {canLoadMore && (
        <TouchableOpacity
          style={styles.moreButton}
          onPress={loadMore}
        >
          <Text style={styles.moreButtonText}>
            {i18n.t('project.sections.comments.showMore')}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

ProjectCommentList.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMore: PropTypes.func.isRequired,
  canLoadMore: PropTypes.bool,
  onActionButtonPress: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  onRequestLogin: PropTypes.func.isRequired,
};

ProjectCommentList.defaultProps = {
  user: null,
  canLoadMore: false,
};

export default ProjectCommentList;
