import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';

import EditMaterialList from '../EditMaterialList';

import styles from './styles';

const ProjectMaterialEditor = (props) => {
  const {
    project, onChange, errors, touched,
  } = props;
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
        onChange={onChange('materials')}
        errors={errors.materials}
        touched={touched.materials}
      />
    </InputScrollView>
  );
};

ProjectMaterialEditor.propTypes = {
  project: PropTypes.shape({
    materials: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amountUnit: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    materials: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      amountUnit: PropTypes.string,
      url: PropTypes.string,
    })),
  }),
  touched: PropTypes.shape({
    materials: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.bool,
      amountUnit: PropTypes.bool,
      url: PropTypes.bool,
    })),
  }),
};

ProjectMaterialEditor.defaultProps = {
  errors: {},
  touched: {},
};

export default ProjectMaterialEditor;
