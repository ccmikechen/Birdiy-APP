import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import RelatedProjectSelector from '../RelatedProjectSelector';
import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import MultipleImageUploadView from '../MultipleImageUploadView';

import styles from './styles';

export default class PostEditor extends Component {
  static propTypes = {
  };

  state = {
    relatedProject: {
      type: 'custom',
      name: '',
      id: null,
    },
    relatedProjectTabIndex: 2,
    message: '',
    images: [],
  };

  handleImageUpload = (image) => {
    const { images } = this.state;
    this.setState({ images: [...images, image.uri] });
  };

  handleImageDelete = (index) => {
    const { images } = this.state;
    images.splice(index, 1);
    this.setState({ images });
  };

  render() {
    const {
      relatedProject,
      relatedProjectTabIndex,
      message,
      images,
    } = this.state;

    return (
      <InputScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <EditSection title="訊息">
            <PureTextInput
              style={styles.textInput}
              value={message}
              placeholder="輸入投稿訊息"
              onChangeText={value => this.setState({ message: value })}
              maxLength={500}
              multiline
              counter
            />
          </EditSection>
          <EditSection title="關聯專案">
            <View style={styles.projectSelectorContainer}>
              <RelatedProjectSelector
                project={relatedProject}
                onChange={project => this.setState({ relatedProject: project })}
                tabIndex={relatedProjectTabIndex}
                onTabChange={index => this.setState({ relatedProjectTabIndex: index })}
              />
            </View>
          </EditSection>
          <EditSection title="照片">
            <MultipleImageUploadView
              images={images}
              onUpload={this.handleImageUpload}
              onDeleteImage={this.handleImageDelete}
            />
          </EditSection>
        </KeyboardAvoidingView>
      </InputScrollView>
    );
  }
}
