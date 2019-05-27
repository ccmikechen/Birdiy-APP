import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import ImageView from '../ImageView';
import Avatar from '../Avatar';
import ActionMenuButton from '../ActionMenuButton';

import { timeAgo } from '../../helpers/datetime';

import Size from '../../constants/Size';

import styles from './styles';

const renderMessage = (topic) => {
  const translatedTopic = i18n.t(
    `categories.${topic}`, {
      defaultValue: topic,
    },
  );

  switch (i18n.currentLocale()) {
    case 'zh-TW':
      return (
        <Text style={styles.message}>
          {'在 '}
          <Text style={styles.topic}>
            {translatedTopic}
          </Text>
          {' 建立了新的專案。'}
        </Text>
      );
    case 'ja':
      return (
        <Text style={styles.message}>
          <Text style={styles.topic}>
            {translatedTopic}
          </Text>
          {' で新しいプロジェクトを作りました。'}
        </Text>
      );
    case 'en':
    default:
      return (
        <Text style={styles.message}>
          {'Created new project in '}
          <Text style={styles.topic}>
            {translatedTopic}
          </Text>
        </Text>
      );
  }
};

const ProjectActivitySection = ({
  project,
  createdAt,
  onUserPress,
  onActionButtonPress,
  onProjectPress,
}) => (
  <Surface style={styles.container}>
    <View style={styles.profileContainer}>
      <Avatar
        image={project.author.image}
        onPress={() => onUserPress(project.author.id)}
        size={Size.projectProfileImageSize}
        borderRadius={Size.projectProfileImageSize / 2}
      />
      <View style={styles.infoContainer}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>
            {project.author.name}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {timeAgo(createdAt)}
          </Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.actionButtonContainer}>
          <ActionMenuButton onPress={() => onActionButtonPress(project)} />
        </View>
      </View>
    </View>
    <View style={styles.messageContainer}>
      {renderMessage(project.topic.name)}
    </View>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onProjectPress(project.id)}
    >
      <ImageView
        style={styles.image}
        uri={project.image ? project.image : null}
        width={Dimensions.get('window').width - 20}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.sourceContainer}
      onPress={() => onProjectPress(project.id)}
    >
      <Text style={styles.source}>
        {project.name}
      </Text>
    </TouchableOpacity>
  </Surface>
);

ProjectActivitySection.propTypes = {
  project: PropTypes.shape({
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    topic: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  createdAt: PropTypes.number.isRequired,
  onUserPress: PropTypes.func,
  onActionButtonPress: PropTypes.func,
  onProjectPress: PropTypes.func,
};

ProjectActivitySection.defaultProps = {
  onUserPress: () => {},
  onActionButtonPress: () => {},
  onProjectPress: () => {},
};

export default ProjectActivitySection;
