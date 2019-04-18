import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import MyFavoritesHeader from '../../components/MyFavoritesHeader';
import MyFavoriteProjectList from '../../containers/MyFavoriteProjectList';

import styles from './styles';

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

  handleOpenProject = () => () => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail');
  };

  handleOpenFilter = () => {
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;

    return (
      <TopScreenView
        style={styles.container}
        navigation={navigation}
        renderHeader={() => (
          <MyFavoritesHeader
            onBack={() => navigation.goBack()}
            onOpenFilter={this.handleOpenFilter}
          />
        )}
        animatedScroll
        loading={loading}
      >
        {query ? (
          <MyFavoriteProjectList
            query={query}
            batchLoad={variables.count}
          />
        ) : null}
      </TopScreenView>
    );
  }
}
