import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import { Surface } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Icon from '@expo/vector-icons';

import UploadImageActions from '../UploadImageActions';

import styles from './styles';

export default class Avatar extends Component {
  static propTypes = {
    image: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number,
    borderRadius: PropTypes.number,
    editable: PropTypes.bool,
    onUpload: PropTypes.func,
  };

  static defaultProps = {
    image: null,
    onPress: () => {},
    size: 50,
    borderRadius: 25,
    editable: false,
    onUpload: () => {},
  };

  handlePress = () => {
    this.uploadActions.show();
  };

  handlePick = async () => {
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

  render() {
    const {
      image,
      onPress,
      size,
      borderRadius,
      editable,
    } = this.props;
    const style = { width: size, height: size, borderRadius };

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={editable ? this.handlePress : onPress}
      >
        {image ? (
          <Image
            style={[styles.image, style]}
            source={{ uri: image }}
          />
        ) : (
          <Icon.MaterialIcons
            name="person"
            size={size * 0.8}
            color="#ffffff"
          />
        )}
        {editable && (
          <Surface style={styles.editIconContainer}>
            <Icon.MaterialIcons
              name="edit"
              size={size / 4}
              color="#ffffff"
            />
          </Surface>
        )}
        <UploadImageActions
          ref={(ref) => { this.uploadActions = ref; }}
          onPick={this.handlePick}
          onCamera={this.handleCamera}
        />
      </TouchableOpacity>
    );
  }
}
