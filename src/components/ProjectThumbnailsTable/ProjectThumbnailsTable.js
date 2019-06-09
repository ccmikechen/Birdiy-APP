import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Icon } from 'expo';
import { FlatGrid } from 'react-native-super-grid';
import i18n from 'i18n-js';

import ProjectSection from '../../containers/ProjectSection';

import { Secondary } from '../../constants/Colors';

import styles from './styles';

const SPACING = 10;
const DIMENSION = Dimensions.get('window').width / 2 - SPACING * 3;

const ProjectThumbnailsTable = ({
  category,
  projects,
  onProjectPress,
  onCategoryPress,
}) => (
  projects && projects.length > 0 && (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => onCategoryPress({ name: category })}
      >
        <Text style={styles.category}>
          {i18n.t(`categories.${category}`)}
        </Text>
        <Icon.MaterialIcons
          name="navigate-next"
          size={22}
          color={Secondary(900)}
        />
      </TouchableOpacity>
      <FlatGrid
        itemDimension={DIMENSION}
        spacing={SPACING}
        items={projects || []}
        style={styles.tableContainer}
        itemContainerStyle={styles.itemContainer}
        renderItem={({ item }) => (
          <ProjectSection
            project={item}
            onPress={onProjectPress}
          />
        )}
      />
    </View>
  )
);

ProjectThumbnailsTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  onProjectPress: PropTypes.func,
  onCategoryPress: PropTypes.func,
};

ProjectThumbnailsTable.defaultProps = {
  projects: [],
  onProjectPress: () => {},
  onCategoryPress: () => {},
};

export default ProjectThumbnailsTable;
