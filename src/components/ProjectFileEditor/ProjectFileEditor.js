import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import EditFileList from '../EditFileList';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectFileEditor extends Component {
  static propTypes = {
    project: PropTypes.shape({
      methods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        type: PropTypes.string,
      })),
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleFileChange = (files) => {
    const { project, onChange } = this.props;
    onChange({ ...project, files });
  };

  render() {
    const { project } = this.props;
    const { files } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditSection title={i18n.t('files.title', i18nOptions)}>
          <EditFileList
            data={files}
            onChange={this.handleFileChange}
          />
        </EditSection>
      </InputScrollView>
    );
  }
}
