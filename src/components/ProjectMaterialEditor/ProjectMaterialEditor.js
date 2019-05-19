import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';

import EditMaterialList from '../EditMaterialList';

import styles from './styles';

export default class ProjectMaterialEditor extends Component {
  static propTypes = {
    project: PropTypes.shape({
      methods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
      })),
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleMaterialChange = (materials) => {
    const { project, onChange } = this.props;
    onChange({ ...project, materials });
  };

  render() {
    const { project } = this.props;
    const { materials } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditMaterialList
          data={materials}
          onChange={this.handleMaterialChange}
        />
      </InputScrollView>
    );
  }
}
