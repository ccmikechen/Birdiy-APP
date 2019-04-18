import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
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
  };

  static defaultProps = {
    query: null,
  };

  handleOpenProject = () => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail');
  };

  handleSearch = () => {
  };

  handleOpenFilter = () => {
  };

  render() {
    const { navigation, query, variables } = this.props;

    return (
      <TopScreenView
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
      >
        <MyProjectList
          query={query}
          batchLoad={variables.count}
        />
      </TopScreenView>
    );
  }
}
