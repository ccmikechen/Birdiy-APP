import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

import styles from './styles';

const ProjectOptionButtons = ({
  onFavoritePress,
  onSharePress,
  onNewPostPress,
  favorite,
}) => (
  <View style={styles.container}>
    {favorite ? (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onFavoritePress}
      >
        <Icon.AntDesign
          name="folder1"
          size={26}
          color={Colors.headerIcon}
        />
        <Text style={styles.buttonText}>
          取消收藏
        </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onFavoritePress}
      >
        <Icon.AntDesign
          name="addfolder"
          size={26}
          color={Colors.headerIcon}
        />
        <Text style={styles.buttonText}>
          收藏專案
        </Text>
      </TouchableOpacity>
    )}
    <View style={styles.divider} />
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onSharePress}
    >
      <Icon.MaterialIcons
        name="share"
        size={26}
        color={Colors.headerIcon}
      />
      <Text style={styles.buttonText}>
        分享
      </Text>
    </TouchableOpacity>
    <View style={styles.divider} />
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onNewPostPress}
    >
      <Icon.MaterialCommunityIcons
        name="image-filter-frames"
        size={26}
        color={Colors.headerIcon}
      />
      <Text style={styles.buttonText}>
        跟著做
      </Text>
    </TouchableOpacity>
  </View>
);

ProjectOptionButtons.propTypes = {
  onFavoritePress: PropTypes.func,
  onSharePress: PropTypes.func,
  onNewPostPress: PropTypes.func,
  favorite: PropTypes.bool,
};

ProjectOptionButtons.defaultProps = {
  onFavoritePress: () => {},
  onSharePress: () => {},
  onNewPostPress: () => {},
  favorite: false,
};

export default ProjectOptionButtons;
