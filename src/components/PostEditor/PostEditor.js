import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import RelatedProjectSelector from '../RelatedProjectSelector';
import EditSection from '../EditSection';

import styles from './styles';

export default class PostEditor extends Component {
  static propTypes = {
  };

  state = {
    relatedProject: {
      type: 'custom',
      name: '',
      id: null,
    },
    relatedProjectTabIndex: 2,
  };

  render() {
    const {
      relatedProject,
      relatedProjectTabIndex,
    } = this.state;

    return (
      <ScrollView style={styles.container}>
        <EditSection title="關聯專案">
          <View style={styles.projectSelectorContainer}>
            <RelatedProjectSelector
              project={relatedProject}
              onChange={project => this.setState({ relatedProject: project })}
              tabIndex={relatedProjectTabIndex}
              onTabChange={index => this.setState({ relatedProjectTabIndex: index })}
            />
          </View>
        </EditSection>
        <EditSection title="訊息" />
      </ScrollView>
    );
  }
}
