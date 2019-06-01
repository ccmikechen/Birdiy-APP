/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import SimpleScreenView from '../../components/SimpleScreenView';
import UserPostsHeader from '../../components/UserPostsHeader';
import MyPostList from '../../containers/MyPostList';
import MyPostActions from '../../components/MyPostActions';

import DeletePostMutation from '../../mutations/DeletePostMutation';

import { showDeletePostSuccessAlert } from '../../helpers/alert';
import { showDeletePostFailedMessage } from '../../helpers/toast';

import styles from './styles';

export default class MyPostsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.object,
    variables: PropTypes.shape({
      count: PropTypes.number,
    }).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  handleOpenImage = (id) => {
    const { navigation } = this.props;
    navigation.push('PostImagesModal', { id });
  }

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  }

  handleEditPost = (post) => {
    const { navigation } = this.props;
    navigation.navigate('EditPostModal', { id: post.id });
  };

  handleDeletePost = (post) => {
    const mutation = new DeletePostMutation({ id: post.id });

    mutation.commit()
      .then(showDeletePostSuccessAlert)
      .catch(showDeletePostFailedMessage);
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const postId = navigation.getParam('postId');

    return (
      <View style={styles.container}>
        <SimpleScreenView
          navigation={navigation}
          renderHeader={() => (
            <UserPostsHeader
              onBack={() => navigation.goBack()}
              onSearch={() => navigation.navigate('SearchDetail')}
              onReorder={this.handleReorder}
            />
          )}
          animatedScroll
          loading={loading}
        >
          <MyPostList
            query={query}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.actions.show(post)}
            onImagePress={this.handleOpenImage}
            onProjectPress={this.handleOpenProject}
            batchLoad={variables.count}
            headerPadding
            postId={postId}
          />
        </SimpleScreenView>
        <MyPostActions
          ref={(ref) => { this.actions = ref; }}
          onEditPost={this.handleEditPost}
          onDeletePost={this.handleDeletePost}
        />
      </View>
    );
  }
}
