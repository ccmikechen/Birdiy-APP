import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import SearchBarHeader from '../../components/SearchBarHeader';
import UserFavoriteProjectList from '../../containers/UserFavoriteProjectList';

export default class UserFavoritesScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      projects: PropTypes.shape({
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

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
  };

  render() {
    const {
      navigation, query, variables,
    } = this.props;
    const userId = navigation.getParam('id');

    return (
      <SimpleScreenView
        {...this.props}
        renderHeader={() => (
          <SearchBarHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
      >
        <UserFavoriteProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          userId={userId}
          onProjectPress={this.handleOpenProject}
        />
      </SimpleScreenView>
    );
  }
}
