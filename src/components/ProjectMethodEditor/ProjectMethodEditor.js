import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import EditMethodList from '../EditMethodList';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

const ProjectMethodEditor = (props) => {
  const {
    project, onChange, errors, touched,
  } = props;
  const { methods } = project;

  const error = (typeof errors.methods === 'string') ? errors.methods : undefined;

  return (
    <InputScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      keyboardAvoidingViewProps={{
        behavior: 'padding',
      }}
      contentContainerStyle={styles.contentContainer}
    >
      <EditSection
        title={i18n.t('methods.title', i18nOptions)}
        error={error}
      >
        <EditMethodList
          data={methods}
          onChange={onChange('methods')}
          errors={errors.methods}
          touched={touched.methods}
        />
      </EditSection>
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
  errors: PropTypes.shape({
    methods: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
      })),
      PropTypes.string,
    ]),
  }),
  touched: PropTypes.shape({
    methods: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.bool,
      title: PropTypes.bool,
      content: PropTypes.bool,
    })),
  }),
};

ProjectMethodEditor.defaultProps = {
  errors: {},
  touched: {},
};

export default ProjectMethodEditor;
