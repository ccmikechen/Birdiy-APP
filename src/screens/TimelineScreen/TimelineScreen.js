import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Icon from '@expo/vector-icons';
import i18n from 'i18n-js';

import TabsScreenView from '../../components/TabsScreenView';
import TimelineHeader from '../../components/TimelineHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import AllActivityList from '../../containers/AllActivityList';
import FollowingActivityList from '../../containers/FollowingActivityList';
import PostActions from '../../components/PostActions';
import LoginActions from '../../components/LoginActions';

import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';
import ReportPostMutation from '../../mutations/ReportPostMutation';

import { isLoggedIn } from '../../helpers/credentails';
import { showReportSuccessMessage } from '../../helpers/toast';

import { UnauthorizedError } from '../../errors';

import styles from './styles';

export default class TimelineScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
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
  };

  static defaultProps = {
    query: null,
  };

  state = {
    addPostButtonVisible: true,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('refocus', this.handleRefocus);
  }

  handleRefocus = () => {
    const tabIndex = this.screenView.getTabIndex();

    if (!(this.allList && this.followingList)) {
      return;
    }

    if (tabIndex === 0) {
      if (this.allList.isOnTop()) {
        this.allList.refresh();
      } else {
        this.allList.scrollToTop();
      }
    } else if (tabIndex === 1) {
      if (this.followingList.isOnTop()) {
        this.followingList.refresh();
      } else {
        this.followingList.scrollToTop();
      }
    }
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
      this.loginActions.show('發布投稿之前必須先登入');
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

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  }

  handleFollowUser = (id) => {
    const mutation = new FollowUserMutation({ id });
    mutation.commit().catch((e) => {
      if (e instanceof UnauthorizedError) {
        this.loginActions.show(i18n.t('loginActions.followingMessage'));
      }
    });
  };

  handleUnfollowUser = (id) => {
    const mutation = new CancelFollowUserMutation({ id });
    mutation.commit().catch((e) => {
      if (e instanceof UnauthorizedError) {
        this.loginActions.show(i18n.t('loginActions.unfollowingMessage'));
      }
    });
  };

  handleReportPost = (id) => {
    const mutation = new ReportPostMutation({ id });
    mutation.commit()
      .then(() => {
        showReportSuccessMessage();
      })
      .catch(() => {});
  };

  handleLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginModal');
  };

  render() {
    const {
      navigation, query, variables,
    } = this.props;
    const { addPostButtonVisible } = this.state;
    const tabs = [
      i18n.t('timeline.tabs.all'),
      i18n.t('timeline.tabs.following'),
    ];

    return (
      <View style={styles.container}>
        <TabsScreenView
          {...this.props}
          ref={(ref) => { this.screenView = ref; }}
          renderHeader={() => (
            <TimelineHeader
              onSearch={() => navigation.navigate('SearchDetail')}
            />
          )}
          tabs={tabs}
          onToggleTabBar={(visible) => {
            this.setState({ addPostButtonVisible: visible });
          }}
          animatedScroll
        >
          <AllActivityList
            innerRef={(ref) => { this.allList = ref; }}
            query={query}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.postActions.show(post)}
            onImagePress={this.handleOpenImage}
            onProjectPress={this.handleOpenProject}
            batchLoad={variables.count}
            headerPadding
          />
          <FollowingActivityList
            innerRef={(ref) => { this.followingList = ref; }}
            query={query}
            onUserPress={this.handleUserPress}
            onActionButtonPress={post => this.postActions.show(post)}
            onImagePress={this.handleOpenImage}
            onProjectPress={this.handleOpenProject}
            onLogin={this.handleLoginPress}
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
          ref={(ref) => { this.postActions = ref; }}
          onFollowUser={this.handleFollowUser}
          onUnfollowUser={this.handleUnfollowUser}
          onReport={this.handleReportPost}
        />
        <LoginActions
          ref={(ref) => { this.loginActions = ref; }}
          onLogin={this.handleLoginPress}
        />
      </View>
    );
  }
}
