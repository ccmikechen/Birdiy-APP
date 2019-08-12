import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';
import * as Icon from '@expo/vector-icons';

import UploadImageActions from '../UploadImageActions';

import { Primary } from '../../constants/Colors';

import styles from './styles';

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
    maxSize: PropTypes.number,
  };

  static defaultProps = {
    onUpload: () => {},
    dimension: 100,
    spacing: 10,
    onDeleteImage: () => {},
    maxSize: null,
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

    });
    await this.handleUploadResult(result);
  };

  handleCamera = async () => {
    if (!(await this.grantPermission(Permissions.CAMERA)
          && await this.grantPermission(Permissions.CAMERA_ROLL))) {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,

    });
    await this.handleUploadResult(result);
  };

  grantPermission = async (permission) => {
    const { status } = await Permissions.askAsync(permission);
    return status === 'granted';
  }

  handleUploadResult = async (result) => {
    if (!result.cancelled) {
      await this.resizeAndUpload(result);
    }
  }

  resizeAndUpload = async (image) => {
    const { maxSize, onUpload } = this.props;

    if (!maxSize) {
      onUpload(image);
      return;
    }

    const { uri, width, height } = image;

    const newImage = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: this.calculateNewSize(maxSize, width, height) }],
    );
    onUpload(newImage);
  };

  calculateNewSize = (maxSize, width, height) => {
    let newWidth;
    let newHeight;

    if (width > height) {
      newWidth = Math.min(width, maxSize);
      newHeight = height * newWidth / width;
    } else {
      newHeight = Math.min(height, maxSize);
      newWidth = width * newHeight / height;
    }

    return { width: newWidth, height: newHeight };
  };

  renderItem = ({ item, index }) => {
    const { onDeleteImage } = this.props;
    const { dimension } = this.state;

    if (item === 'add') {
      return this.renderAddButton();
    }

    return (
      <View style={[styles.imageContainer, { width: dimension }]}>
        <Image
          style={[styles.image, { width: dimension }]}
          source={{ uri: item }}
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

  renderAddButton = () => {
    const { dimension } = this.state;

    return (
      <TouchableOpacity
        style={[
          styles.addButtonContainer,
          { width: dimension },
        ]}
        onPress={() => this.uploadActions.show()}
      >
        <Icon.Ionicons
          name="ios-add-circle-outline"
          size={40}
          color={Primary(700)}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { images } = this.props;
    const { dimension } = this.state;
    const items = [
      ...images,
      ...(images.length < 10 ? ['add'] : []),
    ];

    return (
      <View style={styles.container}>
        <View style={styles.imagesContainer}>
          <FlatGrid
            itemDimension={dimension}
            items={items}
            renderItem={this.renderItem}
            spacing={5}
            fixed
          />
        </View>
        <UploadImageActions
          ref={(ref) => { this.uploadActions = ref; }}
          onPick={this.handleImageUpload}
          onCamera={this.handleCamera}
        />
      </View>
    );
  }
}
