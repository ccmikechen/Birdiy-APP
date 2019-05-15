import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-navigation';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import PureSelector from '../PureSelector';

import styles from './styles';

const i18nOptions = { scope: 'project.create' };

const ProjectDraftEditor = (props) => {
  const {
    project,
    onChange,
    onOpenCategorySelector,
    onSubmit,
  } = props;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <EditSection title={i18n.t('projectName.title', i18nOptions)}>
        <PureTextInput
          style={styles.textInput}
          value={project.name}
          placeholder={i18n.t('projectName.placeholder', i18nOptions)}
          onChangeText={value => onChange({ name: value })}
          maxLength={20}
          counter
        />
      </EditSection>
      <EditSection title={i18n.t('category.title', i18nOptions)}>
        <PureSelector
          placeholder={i18n.t('category.placeholder', i18nOptions)}
          value={project.category && i18n.t(`categories.${project.category}`)}
          onPress={onOpenCategorySelector}
        />
      </EditSection>
      <View style={styles.submitButtonContainer}>
        <Button
          style={styles.submitButton}
          mode="contained"
          onPress={onSubmit}
        >
          <Text style={styles.submitButtonText}>
            {i18n.t('submit', i18nOptions)}
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

ProjectDraftEditor.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onOpenCategorySelector: PropTypes.func,
  onSubmit: PropTypes.func,
};

ProjectDraftEditor.defaultProps = {
  onChange: () => {},
  onOpenCategorySelector: () => {},
  onSubmit: () => {},
};

export default ProjectDraftEditor;
