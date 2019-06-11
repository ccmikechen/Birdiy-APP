/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import SearchBarHeader from '../../components/SearchBarHeader';
import FollowerList from '../../containers/FollowerList';

export default class FollowersScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
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

  handleOpenUser = (user) => {
    const { navigation } = this.props;
    navigation.push('User', { id: user.id });
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const userId = navigation.getParam('id');

    return (
      <SimpleScreenView
        navigation={navigation}
        renderHeader={() => (
          <SearchBarHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        loading={loading}
      >
        <FollowerList
          query={query}
          batchLoad={variables.count}
          onUserPress={this.handleOpenUser}
          userId={userId}
        />
      </SimpleScreenView>
    );
  }
}
