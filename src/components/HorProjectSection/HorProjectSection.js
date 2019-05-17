import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import ActionMenuButton from '../ActionMenuButton';

import Size from '../../constants/Size';

import styles from './styles';

const HorProjectSection = ({
  project,
  onPress,
  hasStatus,
  hasAuthor,
  hasActions,
  onActionButtonPress,
}) => (
  <Surface style={styles.container}>
    <TouchableOpacity
      style={styles.touchable}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        {project.image ? (
          <Image
            source={{ uri: project.image }}
            style={styles.image}
          />
        ) : (
          <Icon.MaterialCommunityIcons
            name="image-filter"
            size={Size.userProjectListImageSize / 2}
            color="#ffffff"
          />
        )}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.topContentContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {project.name}
            </Text>
          </View>
          {hasActions && (
            <View style={styles.optionContainer}>
              <ActionMenuButton onPress={onActionButtonPress} />
            </View>
          )}
        </View>
        <View style={styles.bottomContentContainer}>
          {hasStatus && (
            <View style={styles.statusContainer}>
              {project.published ? (
                <Text style={[styles.status, styles.publishedStatus]}>
                  {i18n.t('project.status.published')}
                </Text>
              ) : (
                <Text style={[styles.status, styles.draftStatus]}>
                  {i18n.t('project.status.draft')}
                </Text>
              )}
            </View>
          )}
          {hasAuthor && (
            <View style={styles.authorContainer}>
              <Text style={styles.author}>
                {`by ${project.author.name}`}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  </Surface>
);

HorProjectSection.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    publishedAt: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onPress: PropTypes.func,
  hasStatus: PropTypes.bool,
  hasAuthor: PropTypes.bool,
  hasActions: PropTypes.bool,
  onActionButtonPress: PropTypes.func,
};

HorProjectSection.defaultProps = {
  onPress: () => {},
  hasStatus: false,
  hasAuthor: false,
  hasActions: false,
  onActionButtonPress: () => {},
};

export default HorProjectSection;
