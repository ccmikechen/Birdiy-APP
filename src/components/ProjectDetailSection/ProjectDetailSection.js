import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ViewPropTypes,
} from 'react-native';

import styles from './styles';

const ProjectDetailSection = ({
  title,
  children,
  style,
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.contentContainer}>
      {children}
    </View>
  </View>
);

ProjectDetailSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: ViewPropTypes.style,
};

ProjectDetailSection.defaultProps = {
  children: null,
  style: {},
};

export default ProjectDetailSection;
