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
    onPress={() => onPress(project.id)}
  >
    <Surface style={styles.container}>
      <Image
        source={{ uri: project.image }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{project.name}</Text>
        <Text style={styles.author}>{`by ${project.author.name}`}</Text>
      </View>
    </Surface>
  </TouchableOpacity>
);

ProjectSection.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func,
};

ProjectSection.defaultProps = {
  onPress: () => () => {},
};

export default ProjectSection;
