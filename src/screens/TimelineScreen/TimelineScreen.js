import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import InfiniteTabsScreenView from '../../components/InfiniteTabsScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
import PostSection from '../../containers/PostSection';
import AnimatedAddButton from '../../components/AnimatedAddButton';

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
      all: PropTypes.arrayOf(PropTypes.object),
      following: PropTypes.arrayOf(PropTypes.object),
    }),
  };

  static defaultProps = {
    query: null,
  };

  state = {
    addPostButtonVisible: true,
  };

  loadMoreContentAsync = () => async () => {
  };

  renderSection = () => (data) => {
    const { navigation } = this.props;

    return (
      <View style={styles.postContainer}>
        <PostSection
          post={data}
          onPostPress={() => {
            navigation.push('PostDetail');
          }}
        />
      </View>
    );
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

  render() {
    const { navigation, query } = this.props;
    const { addPostButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <InfiniteTabsScreenView
          navigation={navigation}
          renderHeader={() => (
            <NormalTopHeader
              title="動態"
              onOpenDrawer={() => navigation.openDrawer()}
            />
          )}
          tabs={TABS}
          data={query}
          loadMoreContentAsync={this.loadMoreContentAsync}
          renderSection={this.renderSection}
          onToggleTabBar={(visible) => {
            this.setState({ addPostButtonVisible: visible });
          }}
          animatedScroll
        />
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
