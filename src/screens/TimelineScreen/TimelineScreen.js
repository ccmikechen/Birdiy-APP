import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import TabsScreenView from '../../components/TabsScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import AllPostList from '../../containers/AllPostList';
import FollowingPostList from '../../containers/FollowingPostList';
import PostActions from '../../components/PostActions';

import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';

import { isLoggedIn } from '../../helpers/credentails';
import { showLoginAlert } from '../../helpers/alert';

import { handleUnauthorizedActionError } from '../../errors';

import styles from './styles';

const TABS = [{
  key: 'all', title: '所有人',
}, {
  key: 'following', title: '跟隨中',
}];

export default class TimelineScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
      following: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
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

  handleSearch = () => {
    const { navigation } = this.props;
    navigation.push('SearchUser');
  };

  handleOpenFilter = () => {
    const { navigation } = this.props;
    navigation.push('UserFilter');
  };

  handleAddPress = async () => {
    if (!(await isLoggedIn())) {
      showLoginAlert();
      return;
    }

    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleOpenImage = (id) => {
    const { navigation } = this.props;
    navigation.push('PostImagesModal', { id });
  }

  handleOpenSource = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  }

  handleFollowUser = (id) => {
    const mutation = new FollowUserMutation({ id });
    mutation.commit().catch(handleUnauthorizedActionError());
  };

  handleUnfollowUser = (id) => {
    const mutation = new CancelFollowUserMutation({ id });
    mutation.commit().catch(handleUnauthorizedActionError());
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const { addPostButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <TabsScreenView
          navigation={navigation}
          renderHeader={() => (
            <NormalTopHeader
              title="動態"
              onOpenDrawer={() => navigation.openDrawer()}
            />
          )}
          tabs={TABS}
          onToggleTabBar={(visible) => {
            this.setState({ addPostButtonVisible: visible });
          }}
          animatedScroll
          loading={loading}
        >
          <AllPostList
            query={query}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.actions.show(post)}
            onImagePress={this.handleOpenImage}
            onSourcePress={this.handleOpenSource}
            batchLoad={variables.count}
            headerPadding
          />
          <FollowingPostList
            query={query}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.actions.show(post)}
            onImagePress={this.handleOpenImage}
            onSourcePress={this.handleOpenSource}
            batchLoad={variables.count}
            headerPadding
          />
        </TabsScreenView>
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
          onPress={this.handleAddPress}
        />
        <PostActions
          ref={(ref) => { this.actions = ref; }}
          onFollowUser={this.handleFollowUser}
          onUnfollowUser={this.handleUnfollowUser}
        />
      </View>
    );
  }
}
