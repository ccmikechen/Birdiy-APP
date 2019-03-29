import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Surface } from 'react-native-paper';

import styles from './styles';

const ProjectSection = ({ project, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Surface style={styles.container}>
      <Image
        source={{ uri: project.image }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.author}>{`by ${project.author}`}</Text>
      </View>
    </Surface>
  </TouchableOpacity>
);

ProjectSection.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onPress: PropTypes.func,
};

ProjectSection.defaultProps = {
  onPress: () => {},
};

export default ProjectSection;