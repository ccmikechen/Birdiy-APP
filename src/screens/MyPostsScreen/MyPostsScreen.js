/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import SimpleScreenView from '../../components/SimpleScreenView';
import UserPostsHeader from '../../components/UserPostsHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import MyPostList from '../../containers/MyPostList';
import MyPostActions from '../../components/MyPostActions';

import DeletePostMutation from '../../mutations/DeletePostMutation';

import {
  showDeletePostSuccessAlert,
  showDeletePostFailedAlert,
} from '../../helpers/alert';

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

  state = {
    addPostButtonVisible: true,
  };

  handleOpenImage = (id) => {
    const { navigation } = this.props;
    navigation.push('PostImagesModal', { id });
  }

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleEditPost = (post) => {
    const { navigation } = this.props;
    navigation.navigate('EditPostModal', { id: post.id });
  };

  handleDeletePost = (post) => {
    const mutation = new DeletePostMutation({ id: post.id });

    mutation.commit()
      .then(showDeletePostSuccessAlert)
      .catch(showDeletePostFailedAlert);
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const { addPostButtonVisible } = this.state;
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
          onToggleTabBar={(visible) => {
            this.setState({ addPostButtonVisible: visible });
          }}
          animatedScroll
          loading={loading}
        >
          <MyPostList
            query={query}
            onImagePress={this.handleOpenImage}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.actions.show(post)}
            batchLoad={variables.count}
            headerPadding
            postId={postId}
          />
        </SimpleScreenView>
        <AnimatedAddButton
          style={styles.addPostButton}
          visible={addPostButtonVisible}
          translate={80}
          renderIcon={() => (
            <Icon.FontAwesome
              name="pencil-square-o"
              size={26}
              color="#ffffff"
            />
          )}
        />
        <MyPostActions
          ref={(ref) => { this.actions = ref; }}
          onEditPost={this.handleEditPost}
          onDeletePost={this.handleDeletePost}
        />
      </View>
    );
  }
}
