/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import UserProjectsHeader from '../../components/UserProjectsHeader';
import UserProjectList from '../../containers/UserProjectList';

export default class UserProjectsScreen extends Component {
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

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
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
          <UserProjectsHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <UserProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleOpenProject}
          userId={userId}
          showCountings
        />
      </SimpleScreenView>
    );
  }
}
