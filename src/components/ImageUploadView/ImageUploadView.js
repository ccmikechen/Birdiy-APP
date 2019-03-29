import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { Icon, ImagePicker, Permissions } from 'expo';

import styles from './styles';

export default class ImageUploadView extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    aspectRatio: PropTypes.number,
    iconSize: PropTypes.number,
  };

  static defaultProps = {
    width: '100%',
    height: '100%',
    aspectRatio: null,
    iconSize: 30,
  };

  state = {
    image: null,
  };

  handlePress = () => {
    this.pickImage();
  };

  pickImage = async () => {
    const {
      status: cameraRollPerm,
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraRollPerm !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const {
      width, height, aspectRatio, iconSize,
    } = this.props;
    const { image } = this.state;
    const imageStyle = aspectRatio
      ? { width, aspectRatio }
      : { width, height };

    return (
      <TouchableOpacity
        style={[imageStyle, styles.container]}
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
