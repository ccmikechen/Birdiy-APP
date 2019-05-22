import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';

import EditFileList from '../EditFileList';

import styles from './styles';

const ProjectFileEditor = (props) => {
  const { project, onChange } = props;
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
      <EditFileList
        data={files}
        onChange={onChange('files')}
      />
    </InputScrollView>
  );
};


ProjectFileEditor.propTypes = {
  project: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
      type: PropTypes.string,
    })),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProjectFileEditor;
