/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import SimpleScreenView from '../../components/SimpleScreenView';
import UserPostsHeader from '../../components/UserPostsHeader';
import UserPostList from '../../containers/UserPostList';
import PostActions from '../../components/PostActions';

import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';

import styles from './styles';

export default class UserPostsScreen extends Component {
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

  handleSearch = () => {
    const { navigation } = this.props;
    navigation.push('SearchUser');
  }

  handleReorder = () => {
  }

  handleOpenImage = (id) => {
    const { navigation } = this.props;
    navigation.push('PostImagesModal', { id });
  }

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleFollowUser = (id) => {
    const mutation = new FollowUserMutation({ id });
    mutation.commit().catch(() => {});
  };

  handleUnfollowUser = (id) => {
    const mutation = new CancelFollowUserMutation({ id });
    mutation.commit().catch(() => {});
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const userId = navigation.getParam('userId');
    const postId = navigation.getParam('postId');

    return (
      <View style={styles.container}>
        <SimpleScreenView
          navigation={navigation}
          renderHeader={() => (
            <UserPostsHeader
              onBack={() => navigation.goBack()}
              onSearch={this.handleSearch}
              onReorder={this.handleReorder}
            />
          )}
          animatedScroll
          loading={loading}
        >
          <UserPostList
            query={query}
            onImagePress={this.handleOpenImage}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.actions.show(post)}
            batchLoad={variables.count}
            headerPadding
            userId={userId}
            postId={postId}
          />
        </SimpleScreenView>
        <PostActions
          ref={(ref) => { this.actions = ref; }}
          onFollowUser={this.handleFollowUser}
          onUnfollowUser={this.handleUnfollowUser}
        />
      </View>
    );
  }
}
