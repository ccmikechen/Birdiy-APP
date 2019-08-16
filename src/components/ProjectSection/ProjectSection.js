import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import { Surface, TouchableRipple } from 'react-native-paper';
import { isEqual } from 'lodash';
import i18n from 'i18n-js';

import ActionMenuButton from '../ActionMenuButton';

import { TextColor } from '../../constants/Colors';

import styles from './styles';

export default class ProjectSection extends Component {
  static propTypes = {
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      topic: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      published: PropTypes.bool,
      viewCount: PropTypes.number,
      likeCount: PropTypes.number,
    }).isRequired,
    onPress: PropTypes.func,
    onActionButtonPress: PropTypes.func,
    actionButtonVisible: PropTypes.bool,
    showStatus: PropTypes.bool,
    showCountings: PropTypes.bool,
  };

  static defaultProps = {
    onPress: () => () => {},
    onActionButtonPress: () => () => {},
    actionButtonVisible: false,
    showStatus: false,
    showCountings: false,
  };

  shoudComponentUpdate(nextProps) {
    const { project } = this.props;

    return !isEqual(project, nextProps.project);
  }

  renderCountings = () => {
    const { project } = this.props;

    return (
      <View style={styles.countingsContainer}>
        <View style={styles.viewsContainer}>
          <Icon.MaterialCommunityIcons
            name="eye"
            size={14}
            color={TextColor.subDark}
          />
          <Text style={styles.countingNumber}>
            {project.viewCount}
          </Text>
        </View>
        <View style={styles.likesContainer}>
          <Icon.MaterialCommunityIcons
            name="heart"
            size={14}
            color={TextColor.subDark}
          />
          <Text style={styles.countingNumber}>
            {project.likeCount}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const {
      project,
      onPress,
      onActionButtonPress,
      actionButtonVisible,
      showStatus,
      showCountings,
    } = this.props;

    return (
      <Surface style={styles.container}>
        <TouchableRipple
          style={styles.container}
          onPress={() => onPress(project)}
        >
          <View style={styles.container}>
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
            <View style={[
              styles.infoContainer,
              showCountings ? null : styles.infoContainerBottom,
            ]}
            >
              <View style={styles.infoTopContainer}>
                <View style={styles.topicContainer}>
                  <Text style={styles.topic}>
                    {i18n.t(`topics.${project.topic.name}`, { defaultValue: project.topic.name })}
                  </Text>
                </View>
                {showStatus && (
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
              </View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.name}
                  numberOfLines={1}
                >
                  {project.name}
                </Text>
              </View>
              <View style={styles.infoBottomContainer}>
                <View style={styles.authorContainer}>
                  <Text style={styles.author}>{`by ${project.author.name}`}</Text>
                </View>
                {actionButtonVisible && (
                  <View style={styles.optionContainer}>
                    <ActionMenuButton onPress={() => onActionButtonPress(project)} />
                  </View>
                )}
              </View>
            </View>
            {showCountings && this.renderCountings()}
          </View>
        </TouchableRipple>
      </Surface>
    );
  }
}
