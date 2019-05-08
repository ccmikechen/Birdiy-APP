import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import UserFavoritesHeader from '../../components/UserFavoritesHeader';
import UserFavoriteProjectList from '../../containers/UserFavoriteProjectList';

import styles from './styles';

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

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const userId = navigation.getParam('id');

    return (
      <SimpleScreenView
        style={styles.container}
        navigation={navigation}
        renderHeader={() => (
          <UserFavoritesHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <UserFavoriteProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          userId={userId}
        />
      </SimpleScreenView>
    );
  }
}
