import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';

import EditFileList from '../EditFileList';

import styles from './styles';

const ProjectFileEditor = (props) => {
  const {
    project, onChange, errors, touched,
  } = props;
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
        errors={errors.files}
        touched={touched.files}
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
  errors: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
  }),
  touched: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.bool,
      url: PropTypes.bool,
    })),
  }),
};

ProjectFileEditor.defaultProps = {
  errors: {},
  touched: {},
};

export default ProjectFileEditor;
