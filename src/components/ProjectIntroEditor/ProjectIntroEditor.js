import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import PureSelector from '../PureSelector';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

const ProjectIntroEditor = (props) => {
  const {
    project,
    categories,
    onSelectCategoryPress,
    onChange,
    errors,
    touched,
  } = props;
  const { name, introduction, category } = project;

  const error = {
    name: touched.name && errors.name,
    category: touched.category && errors.category,
    introduction: touched.introduction && errors.introduction,
  };

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
        title={i18n.t('projectName.title', i18nOptions)}
        error={error.name}
      >
        <PureTextInput
          style={styles.textInput}
          value={name}
          error={error.name}
          placeholder={i18n.t('projectName.placeholder', i18nOptions)}
          onChangeText={onChange('name')}
          maxLength={20}
          counter
        />
      </EditSection>
      <EditSection
        title={i18n.t('category.title', i18nOptions)}
        error={error.category}
      >
        <PureSelector
          style={styles.textInput}
          placeholder={i18n.t('category.placeholder', i18nOptions)}
          value={category && i18n.t(`categories.${category}`, { defaultValue: category })}
          error={error.category}
          onPress={() => onSelectCategoryPress(categories, (index) => {
            const selectedCategory = categories[index] && categories[index].name;
            onChange('category', selectedCategory);
          })}
        />
      </EditSection>
      <EditSection
        title={i18n.t('intro.title', i18nOptions)}
        error={error.introduction}
      >
        <PureTextInput
          style={styles.textInput}
          value={introduction}
          error={error.introduction}
          placeholder={i18n.t('intro.placeholder', i18nOptions)}
          onChangeText={onChange('introduction')}
          maxLength={300}
          multiline
          counter
        />
      </EditSection>
    </InputScrollView>
  );
};

ProjectIntroEditor.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    introduction: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onSelectCategoryPress: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    introduction: PropTypes.string,
    category: PropTypes.string,
  }),
  touched: PropTypes.shape({
    name: PropTypes.bool,
    introduction: PropTypes.bool,
    category: PropTypes.bool,
  }),
};

ProjectIntroEditor.defaultProps = {
  errors: {},
  touched: {},
};

export default ProjectIntroEditor;
