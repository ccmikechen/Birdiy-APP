import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';
import { chunk } from 'lodash';

import InfiniteTabsScreenView from '../../components/InfiniteTabsScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';
import ProjectSection from '../../components/ProjectSection';
import AnimatedAddButton from '../../components/AnimatedAddButton';

import styles from './styles';

import { projects } from './mocks';

const projectPair = chunk(projects, 2).map(project => ({
  type: 'project',
  data: project,
}));

const TABS = [{
  key: 'newest', title: '最新',
}, {
  key: 'hotest', title: '最熱門',
}];

export default class SearchScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    data: {
      newest: projectPair,
      hotest: projectPair,
    },
    addProjectButtonVisible: true,
  };

  loadMoreContentAsync = key => async () => {
    const { data } = this.state;
    const projectData = data[key];
    this.setState({
      data: {
        ...data,
        [key]: [...projectData, ...projectPair],
      },
    });
  };

  handleOpenProject = () => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail');
  };

  renderSection = () => (section) => {
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
    const { data, addProjectButtonVisible } = this.state;

    return (
      <View style={styles.container}>
        <InfiniteTabsScreenView
          style={styles.container}
          navigation={navigation}
          renderHeader={() => (
            <NormalTopHeader
              title="搜尋"
              onOpenDrawer={() => navigation.openDrawer()}
            />
          )}
          tabs={TABS}
          data={data}
          loadMoreContentAsync={this.loadMoreContentAsync}
          renderSection={this.renderSection}
          onToggleTabBar={(visible) => {
            this.setState({ addProjectButtonVisible: visible });
          }}
          animatedScroll
        />
        <AnimatedAddButton
          style={styles.addProjectButton}
          visible={addProjectButtonVisible}
          translate={80}
          renderIcon={() => (
            <Icon.MaterialIcons
              name="add"
              size={26}
              color="#ffffff"
            />
          )}
          onPress={() => navigation.navigate('CreateProjectModal')}
        />
      </View>
    );
  }
}
