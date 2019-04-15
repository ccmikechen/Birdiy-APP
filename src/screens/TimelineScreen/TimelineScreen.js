import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import TabsScreenView from '../../components/TabsScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import AllPostList from '../../containers/AllPostList';
import FollowingPostList from '../../containers/FollowingPostList';

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
  };

  static defaultProps = {
    query: null,
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

  handleAddPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  handlePostPress = id => () => {
    const { navigation } = this.props;
    navigation.push('PostDetail', { id });
  }

  render() {
    const { navigation, query } = this.props;
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
        >
          <AllPostList
            posts={query && query.all}
            onPostPress={this.handlePostPress}
          />
          <FollowingPostList
            posts={query && query.following}
            onPostPress={this.handlePostPress}
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
      </View>
    );
  }
}
