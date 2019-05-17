import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import HorProjectSection from '../HorProjectSection';
import MultipleImageUploadView from '../MultipleImageUploadView';

import styles from './styles';

const i18nOptions = { scope: 'post.edit' };

export default class PostEditor extends Component {
  static propTypes = {
    post: PropTypes.shape({
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
    onChange: PropTypes.func,
  };

  static defaultProps = {
    post: {
      relatedProject: null,
      message: '',
      photos: [],
    },
    onChange: () => {},
  };

  handleImageUpload = (image) => {
    const { post: { photos }, onChange } = this.props;

    onChange({ photos: [...photos, { image: image.uri }] });
  };

  handleImageDelete = (index) => {
    const { post: { photos }, onChange } = this.props;

    photos.splice(index, 1);
    onChange({ photos });
  };

  render() {
    const { post, onChange } = this.props;
    const {
      relatedProject,
      message,
      photos,
    } = post;

    return (
      <View style={styles.container}>
        <EditSection title={i18n.t('message.title', i18nOptions)}>
          <PureTextInput
            style={styles.textInput}
            value={message}
            placeholder={i18n.t('message.placeholder', i18nOptions)}
            onChangeText={value => onChange({ message: value })}
            maxLength={500}
            multiline
            counter
          />
        </EditSection>
        <EditSection title={i18n.t('relatedProject.title', i18nOptions)}>
          <View style={styles.relatedProjectContainer}>
            {relatedProject.type === 'custom' ? (
              <PureTextInput
                style={styles.textInput}
                value={relatedProject.name}
                placeholder={
                  i18n.t(
                    'relatedProject.custom.placeholder',
                    i18nOptions,
                  )
                }
                onChangeText={(value) => {
                  onChange({
                    relatedProject: {
                      type: 'custom',
                      name: value,
                      id: null,
                    },
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
        <EditSection title={i18n.t('photos.title', i18nOptions)}>
          <MultipleImageUploadView
            images={photos.map(({ image }) => image)}
            onUpload={this.handleImageUpload}
            onDeleteImage={this.handleImageDelete}
          />
        </EditSection>
      </View>
    );
  }
}
