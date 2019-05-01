import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TopScreenView from '../../components/TopScreenView';
import PostDetailHeader from '../../components/PostDetailHeader';
import PostSection from '../../containers/PostSection';

import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';

import styles from './styles';

export default class PostDetailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      post: PropTypes.shape({
        author: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  handleOpenSource = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
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
    const { navigation, loading, query } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <PostDetailHeader
            title={query ? `${query.post.author.name}的分享` : ''}
            onBack={() => navigation.goBack()}
          />
        )}
        loading={loading}
      >
        <View style={styles.postContainer}>
          <PostSection
            post={query && query.post}
            onSourcePress={this.handleOpenSource}
            onFollowUser={this.handleFollowUser}
            onUnfollowUser={this.handleUnfollowUser}
          />
        </View>
      </TopScreenView>
    );
  }
}
