import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import ProjectSection from '../ProjectSection';

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
    renderItem={({ item }) => (
      <ProjectSection
        project={item}
        onPress={() => onPressProject(item)}
      />
    )}
  />
);

ProjectThumbnailsTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  })).isRequired,
  onPressProject: PropTypes.func,
};

ProjectThumbnailsTable.defaultProps = {
  onPressProject: () => {},
};

export default ProjectThumbnailsTable;
