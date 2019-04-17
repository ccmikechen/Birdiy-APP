import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { chunk } from 'lodash';

import InfiniteScreenView from '../../components/InfiniteScreenView';
import MyFavoritesHeader from '../../components/MyFavoritesHeader';
import ProjectSection from '../../components/ProjectSection';

import styles from './styles';

import { projects } from './mocks';

const projectPair = chunk(projects, 2);

export default class MyFavoritesScreen extends Component {
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

  handleOpenProject = () => () => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail');
  };

  handleOpenFilter = () => {
  };

  renderSection = data => (
    <View style={styles.projectColumn}>
      <View style={styles.projectSectionContainer}>
        <ProjectSection
          project={data[0]}
          onPress={this.handleOpenProject}
        />
      </View>
      <View style={styles.projectSectionContainer}>
        <ProjectSection
          project={data[1]}
          onPress={this.handleOpenProject}
        />
      </View>
    </View>
  );

  render() {
    const { navigation } = this.props;
    const { data } = this.state;

    return (
      <InfiniteScreenView
        style={styles.container}
        navigation={navigation}
        renderHeader={() => (
          <MyFavoritesHeader
            onBack={() => navigation.goBack()}
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
