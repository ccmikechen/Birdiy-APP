import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

const ProjectDetailSection = ({
  title,
  children,
}) => (
  <View style={styles.container}>
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
};

ProjectDetailSection.defaultProps = {
  children: null,
};

export default ProjectDetailSection;
