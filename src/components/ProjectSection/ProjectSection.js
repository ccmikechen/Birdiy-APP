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
import ActionMenuButton from '../ActionMenuButton';

import styles from './styles';

const ProjectSection = ({
  project,
  onPress,
  onActionButtonPress,
  actionButtonVisible,
  showStatus,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(project.id, project.published)}
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
      <View style={styles.infoContainer}>
        <View style={styles.infoTopContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{project.name}</Text>
          </View>
          {showStatus && (
            <View style={styles.statusContainer}>
              {project.published ? (
                <Text style={[styles.status, styles.publishedStatus]}>
                  公開
                </Text>
              ) : (
                <Text style={[styles.status, styles.draftStatus]}>
                  草稿
                </Text>
              )}
            </View>
          )}
        </View>
        <View style={styles.infoBottomContainer}>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{`by ${project.author.name}`}</Text>
          </View>
          {actionButtonVisible && (
            <View style={styles.optionContainer}>
              <ActionMenuButton onPress={() => onActionButtonPress(project.id)} />
            </View>
          )}
        </View>
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
    published: PropTypes.bool.isRequired,
  }).isRequired,
  onPress: PropTypes.func,
  onActionButtonPress: PropTypes.func,
  actionButtonVisible: PropTypes.bool,
  showStatus: PropTypes.bool,
};

ProjectSection.defaultProps = {
  onPress: () => () => {},
  onActionButtonPress: () => () => {},
  actionButtonVisible: false,
  showStatus: false,
};

export default ProjectSection;
