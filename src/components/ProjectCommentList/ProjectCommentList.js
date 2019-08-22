/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, TouchableOpacity, Text,
} from 'react-native';
import i18n from 'i18n-js';

import ProjectCommentListItem from '../../containers/ProjectCommentListItem';

import styles from './styles';

const ProjectCommentList = (props) => {
  const { comments, loadMore, canLoadMore } = props;

  return (
    <View style={styles.container}>
      <FlatList
        {...props}
        data={comments}
        renderItem={({ item }) => (
          <ProjectCommentListItem comment={item} />
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
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMore: PropTypes.func.isRequired,
  canLoadMore: PropTypes.bool,
};

ProjectCommentList.defaultProps = {
  canLoadMore: false,
};

export default ProjectCommentList;
