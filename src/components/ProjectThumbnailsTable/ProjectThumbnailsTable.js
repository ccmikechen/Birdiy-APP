import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

import styles from './styles';

const SPACING = 10;
const DIMENSION = Dimensions.get('window').width / 2 - SPACING * 3;

const ProjectThumbnailsTable = ({ projects, onPressProject }) => (
  <FlatGrid
    itemDimension={DIMENSION}
    spacing={SPACING}
    items={projects}
    style={styles.container}
    itemContainerStyle={styles.itemContainer}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={onPressProject(index)}
      >
        <Image
          source={{ uri: item.imageURI }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

ProjectThumbnailsTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageURI: PropTypes.string.isRequired,
  })).isRequired,
  onPressProject: PropTypes.func,
};

ProjectThumbnailsTable.defaultProps = {
  onPressProject: () => {},
};

export default ProjectThumbnailsTable;
