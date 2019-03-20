import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { chunk } from 'lodash';

import InfiniteScreenView from '../../components/InfiniteScreenView';
import MyProjectsHeader from '../../components/MyProjectsHeader';
import ProjectSection from '../../components/ProjectSection';

import styles from './styles';

import { projects } from './mocks';

const projectPair = chunk(projects, 2).map(project => ({
  type: 'project',
  data: project,
}));

export default class MyProjectsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    data: projectPair,
  };

  loadMoreContentAsync = async () => {
    const { data } = this.state;
    this.setState({
      data: [...data, ...projectPair],
    });
  };

  handleOpenProject = () => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail');
  };

  handleSearch = () => {
  };

  handleOpenFilter = () => {
  };

  renderSection = (section) => {
    switch (section.type) {
      case 'project':
        return (
          <View style={styles.projectColumn}>
            <View style={styles.projectSectionContainer}>
              <ProjectSection
                project={section.data[0]}
                onPress={this.handleOpenProject}
              />
            </View>
            <View style={styles.projectSectionContainer}>
              <ProjectSection
                project={section.data[1]}
                onPress={this.handleOpenProject}
              />
            </View>
          </View>

        );
      default:
        return null;
    }
  };

  render() {
    const { navigation } = this.props;
    const { data } = this.state;

    return (
      <InfiniteScreenView
        style={styles.container}
        navigation={navigation}
        renderHeader={() => (
          <MyProjectsHeader
            onBack={() => navigation.goBack()}
            onSearch={this.handleSearch}
            onOpenFilter={this.handleOpenFilter}
          />
        )}
        data={data}
        loadMoreContentAsync={this.loadMoreContentAsync}
        renderSection={this.renderSection}
        animatedScroll
      />
    );
  }
}
