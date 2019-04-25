import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';

import styles from './styles';

const ProjectSection = ({ project, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(project.id)}
  >
    <Surface style={styles.container}>
      {project.image ? (
        <Image
          source={{ uri: project.image }}
          style={styles.image}
        />
      ) : (
        <View style={styles.image}>
          <Icon.MaterialCommunityIcons
            name="image-filter"
            size={Dimensions.get('window').width / 6}
            color="#ffffff"
          />
        </View>
      )}
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
    image: PropTypes.string,
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
