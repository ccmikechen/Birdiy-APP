import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import SearchBarHeader from '../../components/SearchBarHeader';
import MyFavoriteProjectList from '../../containers/MyFavoriteProjectList';

export default class MyFavoritesScreen extends Component {
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

    return (
      <SimpleScreenView
        navigation={navigation}
        renderHeader={() => (
          <SearchBarHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <MyFavoriteProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleOpenProject}
        />
      </SimpleScreenView>
    );
  }
}
