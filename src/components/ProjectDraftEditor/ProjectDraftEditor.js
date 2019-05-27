import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import PureSelector from '../PureSelector';

import createProjectValidation from '../../validations/createProjectValidation';

import styles from './styles';

const i18nOptions = { scope: 'project.create' };

export default class ProjectDraftEditor extends Component {
  static propTypes = {
    initialValues: PropTypes.shape({
      name: PropTypes.string,
      topic: PropTypes.string,
    }),
    onOpenTopicSelector: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitPress: PropTypes.func,
  };

  static defaultProps = {
    initialValues: {
      name: '',
      topic: null,
    },
    onOpenTopicSelector: () => {},
    onSubmit: () => {},
    onSubmitPress: () => {},
  };

  bindSubmit = (submitForm) => {
    this.submit = submitForm;
  };

  render() {
    const {
      initialValues,
      onOpenTopicSelector,
      onSubmit,
      onSubmitPress,
    } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={createProjectValidation()}
      >
        {(props) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            submitForm,
          } = props;
          const { name, topic } = values;

          const nameError = touched.name && errors.name;
          const topicError = touched.topic && errors.topic;

          this.bindSubmit(submitForm);

          return (
            <View style={styles.container}>
              <EditSection
                title={i18n.t('projectName.title', i18nOptions)}
                error={nameError}
              >
                <PureTextInput
                  style={styles.textInput}
                  value={name}
                  error={nameError}
                  placeholder={i18n.t('projectName.placeholder', i18nOptions)}
                  onChangeText={handleChange('name')}
                  maxLength={20}
                  counter
                />
              </EditSection>
              <EditSection
                title={i18n.t('topic.title', i18nOptions)}
                error={topicError}
              >
                <PureSelector
                  placeholder={i18n.t('topic.placeholder', i18nOptions)}
                  value={topic && i18n.t(`topics.${topic}`)}
                  error={topicError}
                  onPress={() => onOpenTopicSelector((selected) => {
                    handleChange('topic')(selected);
                  })}
                />
              </EditSection>
              <View style={styles.submitButtonContainer}>
                <Button
                  style={styles.submitButton}
                  mode="contained"
                  onPress={onSubmitPress}
                >
                  <Text style={styles.submitButtonText}>
                    {i18n.t('submit', i18nOptions)}
                  </Text>
                </Button>
              </View>
            </View>
          );
        }}
      </Formik>
    );
  }
}
