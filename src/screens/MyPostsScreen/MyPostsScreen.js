import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import SimpleScreenView from '../../components/SimpleScreenView';
import MyPostsHeader from '../../components/MyPostsHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import MyPostList from '../../containers/MyPostList';

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
    query: PropTypes.shape({
      posts: PropTypes.shape({
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
  }

  handleReorder = () => {
  }

  handleOpenPost = (id) => {
    const { navigation } = this.props;
    navigation.push('PostDetail', { id });
  }

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const { addPostButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <SimpleScreenView
          navigation={navigation}
          renderHeader={() => (
            <MyPostsHeader
              onBack={() => navigation.goBack()}
              onSearch={this.handleSearch}
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
            onPostPress={this.handleOpenPost}
            batchLoad={variables.count}
            headerPadding
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
      </View>
    );
  }
}
