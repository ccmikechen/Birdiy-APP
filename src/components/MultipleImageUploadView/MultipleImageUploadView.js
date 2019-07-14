import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Icon from '@expo/vector-icons';
import i18n from 'i18n-js';

import styles from './styles';

const i18nOptions = { scope: 'imageUploadActions' };

const getRealDimension = (dimension, spacing) => {
  const screenWidth = Dimensions.get('window').width;
  const rowAmount = Math.round((screenWidth - spacing) / (dimension + spacing));

  return Math.floor((screenWidth - spacing * (rowAmount + 1)) / rowAmount);
};

export default class MultipleImageUploadView extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    onUpload: PropTypes.func,
    dimension: PropTypes.number,
    spacing: PropTypes.number,
    onDeleteImage: PropTypes.func,
  };

  static defaultProps = {
    onUpload: () => {},
    dimension: 100,
    spacing: 10,
    onDeleteImage: () => {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { dimension, spacing } = nextProps;
    const newDimension = getRealDimension(dimension, spacing);

    return { ...prevState, dimension: newDimension };
  }

  constructor(props) {
    super(props);
    const { dimension, spacing } = props;
    this.state = { dimension: getRealDimension(dimension, spacing) };
  }

  handleImageUpload = async () => {
    if (!(await this.grantPermission(Permissions.CAMERA_ROLL))) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });
    this.handleUploadResult(result);
  };

  handleCamera = async () => {
    if (!(await this.grantPermission(Permissions.CAMERA)
          && await this.grantPermission(Permissions.CAMERA_ROLL))) {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });
    this.handleUploadResult(result);
  };

  grantPermission = async (permission) => {
    const { status } = await Permissions.askAsync(permission);
    return status === 'granted';
  }

  handleUploadResult = (result) => {
    const { onUpload } = this.props;
    if (result.cancelled) {
      return;
    }
    onUpload(result);
  }

  renderImage = ({ item: image, index }) => {
    const { onDeleteImage } = this.props;
    const { dimension } = this.state;

    return (
      <View style={[styles.imageContainer, { height: dimension }]}>
        <Image
          style={[styles.image, { height: dimension }]}
          source={{ uri: image }}
        />
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeleteImage(index)}
        >
          <Icon.MaterialIcons
            name="close"
            size={22}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { images } = this.props;
    const { dimension } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Button
            title={i18n.t('upload', i18nOptions)}
            containerStyle={styles.button}
            type="solid"
            onPress={this.handleImageUpload}
          />
          <Button
            title={i18n.t('camera', i18nOptions)}
            containerStyle={styles.button}
            type="solid"
            onPress={this.handleCamera}
          />
        </View>
        <View style={styles.imagesContainer}>
          <FlatGrid
            itemDimension={dimension}
            items={images}
            renderItem={this.renderImage}
            spacing={5}
            fixed
          />
        </View>
      </View>
    );
  }
}
