import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import PostDetailHeader from '../../components/PostDetailHeader';
import PostSection from '../../components/PostSection';

import { post } from './mocks';

export default class PostDetailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <PostDetailHeader
            title={`${post.user.name}的分享`}
            onBack={() => navigation.goBack()}
          />
        )}
      >
        <PostSection post={post} />
      </TopScreenView>
    );
  }
}
