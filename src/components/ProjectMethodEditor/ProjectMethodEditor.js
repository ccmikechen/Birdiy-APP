import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';

import EditMethodList from '../EditMethodList';

import styles from './styles';

const ProjectMethodEditor = (props) => {
  const { project, onChange } = props;
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
        onChange={onChange('methods')}
      />
    </InputScrollView>
  );
};

ProjectMethodEditor.propTypes = {
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

export default ProjectMethodEditor;
