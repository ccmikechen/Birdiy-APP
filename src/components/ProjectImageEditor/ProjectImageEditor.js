import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import ImageUploadView from '../ImageUploadView';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectImage extends Component {
  static propTypes = {
    project: PropTypes.shape({
      image: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleImageUpload = (image) => {
    const { onChange } = this.props;
    onChange({ image: image.uri });
  };

  render() {
    const { project } = this.props;
    const { image } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditSection title={i18n.t('image.title', i18nOptions)}>
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
