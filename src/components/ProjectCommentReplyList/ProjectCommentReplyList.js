/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import ProjectCommentReplyListItem from '../../containers/ProjectCommentReplyListItem';

import { Primary } from '../../constants/Colors';

import styles from './styles';

const ProjectCommentReplyList = (props) => {
  const {
    replies,
    loadMore,
    canLoadMore,
    onActionButtonPress,
  } = props;

  return (
    <View style={styles.container}>
      <FlatList
        {...props}
        data={replies}
        renderItem={({ item }) => (
          <ProjectCommentReplyListItem
            comment={item}
            onActionButtonPress={onActionButtonPress}
          />
        )}
        keyExtractor={item => item.__id}
      />
      {canLoadMore && (
        <Button
          icon="expand-more"
          mode="contained"
          color={Primary(700)}
          onPress={loadMore}
        >
          {i18n.t('project.sections.replies.showMore')}
        </Button>
      )}
    </View>
  );
};

ProjectCommentReplyList.propTypes = {
  replies: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMore: PropTypes.func.isRequired,
  canLoadMore: PropTypes.bool,
  onActionButtonPress: PropTypes.func.isRequired,
};

ProjectCommentReplyList.defaultProps = {
  canLoadMore: false,
};

export default ProjectCommentReplyList;
