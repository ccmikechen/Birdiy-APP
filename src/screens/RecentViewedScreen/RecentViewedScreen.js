import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../../components/SimpleScreenView';
import RecentViewedHeader from '../../components/RecentViewedHeader';
import RecentViewedProjectList from '../../containers/RecentViewedProjectList';

export default class RecentViewedScreen extends Component {
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

    return (
      <SimpleScreenView
        {...this.props}
        renderHeader={() => (
          <RecentViewedHeader
            onBack={() => navigation.goBack()}
            onSearch={() => navigation.navigate('SearchDetail')}
          />
        )}
        animatedScroll
      >
        <RecentViewedProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleOpenProject}
        />
      </SimpleScreenView>
    );
  }
}
