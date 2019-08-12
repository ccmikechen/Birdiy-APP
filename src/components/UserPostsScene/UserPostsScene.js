import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import i18n from 'i18n-js';

import UserProfileAddButton from '../UserProfileAddButton';
import MoreButton from '../MoreButton';
import MyPostActions from '../MyPostActions';
import HorPostSection from '../HorPostSection';
import MessageView from '../MessageView';

import styles from './styles';

export default class UserPostsScene extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      insertedAt: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        image: PropTypes.string.isRequired,
      }),
    })).isRequired,
    editable: PropTypes.bool.isRequired,
    onMorePress: PropTypes.func,
    onAddPress: PropTypes.func,
    onOpenPost: PropTypes.func,
    onEditPost: PropTypes.func,
    onDeletePost: PropTypes.func,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    onMorePress: () => {},
    onAddPress: () => {},
    onOpenPost: () => {},
    onEditPost: () => {},
    onDeletePost: () => {},
    visible: true,
  };

  renderRow = ({ item: post }) => {
    const { onOpenPost, editable } = this.props;

    return (
      <HorPostSection
        post={post}
        onPress={() => onOpenPost(post.id)}
        hasActions={editable}
        onActionButtonPress={() => this.actions.show(post)}
      />
    );
  };

  render() {
    const {
      posts,
      onMorePress,
      onAddPress,
      editable,
      onEditPost,
      onDeletePost,
      visible,
    } = this.props;

    return (
      <View style={visible ? null : { display: 'none' }}>
        {editable ? (
          <UserProfileAddButton
            text={i18n.t('post.create.title')}
            onPress={onAddPress}
          />
        ) : null}
        <FlatList
          {...this.props}
          style={styles.listView}
          data={posts}
          renderItem={this.renderRow}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('profile.emptyMessage.posts')}
              style={{ paddingTop: 100 }}
            />
)}
          keyExtractor={item => item.id}
        />
        {posts.length > 0 && (
          <MoreButton
            onPress={onMorePress}
            text={i18n.t('general.more')}
          />
        )}
        <MyPostActions
          ref={(ref) => { this.actions = ref; }}
          onEditPost={({ id }) => onEditPost(id)}
          onDeletePost={({ id }) => onDeletePost(id)}
        />
      </View>
    );
  }
}
