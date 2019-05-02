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

  handleAddPress = () => {
    const { navigation } = this.props;
    navigation.navigate('CreatePostModal');
  };

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleOpenImage = () => {
  }

  handleOpenSource = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  }

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
            onImagePress={this.handleOpenImage}
            onSourcePress={this.handleOpenSource}
            batchLoad={variables.count}
            headerPadding
          />
          <FollowingPostList
            query={query}
            onUserPress={this.handleUserPress}
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
      </View>
    );
  }
}
