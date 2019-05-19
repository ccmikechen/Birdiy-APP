import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';

import EditMethodList from '../EditMethodList';

import styles from './styles';

export default class ProjectMethodEditor extends Component {
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

  handleMethodChange = (methods) => {
    const { project, onChange } = this.props;
    onChange({ ...project, methods });
  };

  render() {
    const { project } = this.props;
    const { methods } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditMethodList
          data={methods}
          onChange={this.handleMethodChange}
        />
      </InputScrollView>
    );
  }
}
