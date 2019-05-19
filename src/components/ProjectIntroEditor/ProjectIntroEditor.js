import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import PureSelector from '../PureSelector';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectIntroEditor extends Component {
  static propTypes = {
    project: PropTypes.shape({
      name: PropTypes.string,
      introduction: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSelectCategoryPress: PropTypes.func.isRequired,
  };

  handleChange = (data) => {
    const { project, onChange } = this.props;
    onChange({ ...project, ...data });
  };

  render() {
    const { project, onSelectCategoryPress } = this.props;
    const { name, introduction, category } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditSection title={i18n.t('projectName.title', i18nOptions)}>
          <PureTextInput
            style={styles.textInput}
            value={name}
            placeholder={i18n.t('projectName.placeholder', i18nOptions)}
            onChangeText={value => this.handleChange({ name: value })}
            maxLength={20}
            counter
          />
        </EditSection>
        <EditSection title={i18n.t('category.title', i18nOptions)}>
          <PureSelector
            style={styles.textInput}
            placeholder={i18n.t('category.placeholder', i18nOptions)}
            value={category && i18n.t(`categories.${category}`)}
            onPress={onSelectCategoryPress}
          />
        </EditSection>
        <EditSection title={i18n.t('intro.title', i18nOptions)}>
          <PureTextInput
            style={styles.textInput}
            value={introduction}
            placeholder={i18n.t('intro.placeholder', i18nOptions)}
            onChangeText={value => this.handleChange({ introduction: value })}
            maxLength={300}
            multiline
            counter
          />
        </EditSection>
      </InputScrollView>
    );
  }
}
