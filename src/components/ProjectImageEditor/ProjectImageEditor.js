import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import ImageUploadView from '../ImageUploadView';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectImageEditor extends Component {
  static propTypes = {
    project: PropTypes.shape({
      image: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      image: PropTypes.string,
    }),
    touched: PropTypes.shape({
      image: PropTypes.bool,
    }),
  };

  static defaultProps = {
    errors: {},
    touched: {},
  };

  handleImageUpload = (image) => {
    const { onChange } = this.props;
    onChange('image')(image.uri);
  };

  render() {
    const { project, errors, touched } = this.props;
    const { image } = project;

    const error = touched.image && errors.image;

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
          title={i18n.t('image.title', i18nOptions)}
          error={error}
        >
          <View style={styles.imageContainer}>
            <ImageUploadView
              width="100%"
              aspect={[1, 1]}
              iconSize={Dimensions.get('window').width / 2}
              image={image}
              onUpload={this.handleImageUpload}
            />
          </View>
        </EditSection>
      </InputScrollView>
    );
  }
}
