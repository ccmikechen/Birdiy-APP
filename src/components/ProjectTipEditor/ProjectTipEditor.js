import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

const ProjectTipEditor = (props) => {
  const {
    project, onChange, errors, touched,
  } = props;
  const { tip } = project;

  const error = touched.tip && errors.tip;

  return (
    <InputScrollView
      style={styles.container}
      keyboardOffset={100}
      keyboardShouldPersistTaps="always"
      keyboardAvoidingViewProps={{
        behavior: 'padding',
      }}
      contentContainerStyle={styles.contentContainer}
    >
      <EditSection title={i18n.t('tip.title', i18nOptions)}>
        <PureTextInput
          style={styles.textInput}
          value={tip}
          error={error}
          placeholder={i18n.t('tip.placeholder', i18nOptions)}
          onChangeText={onChange('tip')}
          maxLength={300}
          multiline
          counter
        />
      </EditSection>
    </InputScrollView>
  );
};

ProjectTipEditor.propTypes = {
  project: PropTypes.shape({
    tip: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    tip: PropTypes.string,
  }),
  touched: PropTypes.shape({
    tip: PropTypes.bool,
  }),
};

ProjectTipEditor.defaultProps = {
  errors: {},
  touched: {},
};

export default ProjectTipEditor;
