import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import RelatedProjectSelector from '../RelatedProjectSelector';
import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import MultipleImageUploadView from '../MultipleImageUploadView';

import styles from './styles';

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
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
      >
        <KeyboardAvoidingView behavior="padding" enabled>
          <EditSection title="訊息">
            <PureTextInput
              style={styles.textInput}
              value={message}
              placeholder="輸入投稿訊息"
              onChangeText={value => onChange({ message: value })}
              maxLength={500}
              multiline
              counter
            />
          </EditSection>
          <EditSection title="關聯專案">
            <View style={styles.projectSelectorContainer}>
              <RelatedProjectSelector
                project={relatedProject}
                onChange={project => onChange({ relatedProject: project })}
              />
            </View>
          </EditSection>
          <EditSection title="照片">
            <MultipleImageUploadView
              images={photos.map(({ image }) => image)}
              onUpload={this.handleImageUpload}
              onDeleteImage={this.handleImageDelete}
            />
          </EditSection>
        </KeyboardAvoidingView>
      </InputScrollView>
    );
  }
}
