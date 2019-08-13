import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import i18n from 'i18n-js';

import Colors, { Primary } from '../../constants/Colors';

import styles from './styles';

const i18nOptions = { scope: 'project.options' };

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
          color={Primary(700)}
        />
        <Text style={[styles.buttonText, styles.toggledButtonText]}>
          {i18n.t('cancelFavorite', i18nOptions)}
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
          {i18n.t('favorite', i18nOptions)}
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
        {i18n.t('share', i18nOptions)}
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
        {i18n.t('follow', i18nOptions)}
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
