import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Formik } from 'formik';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import HorProjectSection from '../HorProjectSection';
import MultipleImageUploadView from '../MultipleImageUploadView';

import createPostValidation from '../../validations/createPostValidation';

import styles from './styles';

const i18nOptions = { scope: 'post.edit' };

export default class PostEditor extends Component {
  static propTypes = {
    initialValues: PropTypes.shape({
      relatedProject: PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string,
        id: PropTypes.string,
      }),
      message: PropTypes.string,
      photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
      })),
    }),
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    initialValues: {
      relatedProject: null,
      message: '',
      photos: [],
    },
    onSubmit: () => {},
  };

  bindSubmit = (submitForm) => {
    this.submit = submitForm;
  };

  render() {
    const { initialValues, onSubmit } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={createPostValidation()}
      >
        {(props) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            submitForm,
          } = props;
          const {
            relatedProject,
            message,
            photos,
          } = values;

          const messageError = touched.message && errors.message;
          const relatedProjectNameError = (touched.relatedProject && touched.relatedProject.name)
                && (errors.relatedProject && errors.relatedProject.name);
          const photosError = touched.photos && errors.photos;

          this.bindSubmit(submitForm);

          return (
            <View style={styles.container}>
              <EditSection
                title={i18n.t('message.title', i18nOptions)}
                error={messageError}
              >
                <PureTextInput
                  style={styles.textInput}
                  value={message}
                  error={messageError}
                  placeholder={i18n.t('message.placeholder', i18nOptions)}
                  onChangeText={handleChange('message')}
                  maxLength={500}
                  multiline
                  counter
                />
              </EditSection>
              <EditSection
                title={i18n.t('relatedProject.title', i18nOptions)}
                error={relatedProjectNameError}
              >
                <View style={styles.relatedProjectContainer}>
                  {relatedProject.type === 'custom' ? (
                    <PureTextInput
                      style={styles.textInput}
                      value={relatedProject.name}
                      error={relatedProjectNameError}
                      placeholder={
                        i18n.t(
                          'relatedProject.custom.placeholder',
                          i18nOptions,
                        )
                      }
                      onChangeText={(value) => {
                        handleChange('relatedProject')({
                          type: 'custom',
                          name: value,
                          id: null,
                        });
                      }}
                      maxLength={20}
                      counter
                    />
                  ) : (
                    <HorProjectSection
                      project={relatedProject}
                    />
                  )}
                </View>
              </EditSection>
              <EditSection
                title={i18n.t('photos.title', i18nOptions)}
                error={photosError}
              >
                <MultipleImageUploadView
                  images={photos.map(({ image }) => image)}
                  onUpload={(image) => {
                    handleChange('photos')([
                      ...photos,
                      { image: image.uri },
                    ]);
                  }}
                  onDeleteImage={(index) => {
                    photos.splice(index, 1);
                    handleChange('photos')(photos);
                  }}
                />
              </EditSection>
            </View>
          );
        }}
      </Formik>
    );
  }
}
