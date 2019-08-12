import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

import { TextColor } from '../../constants/Colors';

import styles from './styles';

const TouchableSectionTitle = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.title}>
      {title}
    </Text>
    <Icon.MaterialIcons
      name="navigate-next"
      size={22}
      color={TextColor.sectionTitle}
    />
  </TouchableOpacity>
);

TouchableSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

TouchableSectionTitle.defaultProps = {
  onPress: () => {},
};

export default TouchableSectionTitle;
