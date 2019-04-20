import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import MyProjectsHeader from '../../components/MyProjectsHeader';
import MyProjectList from '../../containers/MyProjectList';

import styles from './styles';

export default class MyProjectsScreen extends Component {
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

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  };

  handleSearch = () => {
  };

  handleOpenFilter = () => {
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;

    return (
      <SimpleScreenView
        style={styles.container}
        navigation={navigation}
        renderHeader={() => (
          <MyProjectsHeader
            onBack={() => navigation.goBack()}
            onSearch={this.handleSearch}
            onOpenFilter={this.handleOpenFilter}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <MyProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleOpenProject}
        />
      </SimpleScreenView>
    );
  }
}
