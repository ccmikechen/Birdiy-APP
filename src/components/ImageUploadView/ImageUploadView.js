import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as Icon from '@expo/vector-icons';

import styles from './styles';

export default class ImageUploadView extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    aspect: PropTypes.arrayOf(PropTypes.number),
    iconSize: PropTypes.number,
    image: PropTypes.string,
    onUpload: PropTypes.func,
  };

  static defaultProps = {
    width: '100%',
    aspect: [1, 1],
    iconSize: 30,
    image: null,
    onUpload: () => {},
  };

  handlePress = () => {
    this.pickImage();
  };

  pickImage = async () => {
    const { onUpload, aspect } = this.props;
    const {
      status: cameraRollPerm,
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraRollPerm !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect,
    });

    if (!result.cancelled) {
      onUpload(result);
    }
  };

  render() {
    const {
      width,
      aspect,
      iconSize,
      image,
    } = this.props;
    const aspectRatio = aspect[0] / aspect[1];
    const containerStyle = { width, aspectRatio };
    const imageStyle = { width: '100%', aspectRatio };

    return (
      <TouchableOpacity
        style={[containerStyle, styles.container]}
        onPress={this.handlePress}
      >
        {image ? (
          <Image source={{ uri: image }} style={imageStyle} />
        ) : (
          <Icon.MaterialCommunityIcons
            name="image-filter"
            size={iconSize}
            color="#ffffff"
          />
        )}
      </TouchableOpacity>
    );
  }
}
