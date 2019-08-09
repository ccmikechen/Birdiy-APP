import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { Surface } from 'react-native-paper';
import { isEqual } from 'lodash';

import ImageView from '../ImageView';
import Avatar from '../Avatar';
import ActionMenuButton from '../ActionMenuButton';

import { timeAgo } from '../../helpers/datetime';

import Size from '../../constants/Size';

import styles from './styles';

export default class PostSection extends Component {
  static propTypes = {
    post: PropTypes.shape({
      author: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      }).isRequired,
      insertedAt: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      photosCount: PropTypes.number.isRequired,
      thumbnail: PropTypes.shape({
        image: PropTypes.string.isRequired,
      }),
      relatedProjectType: PropTypes.string.isRequired,
      relatedProject: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      relatedProjectName: PropTypes.string,
    }).isRequired,
    onUserPress: PropTypes.func,
    onActionButtonPress: PropTypes.func,
    onImagePress: PropTypes.func,
    onProjectPress: PropTypes.func,
  };

  static defaultProps = {
    onUserPress: () => {},
    onActionButtonPress: () => {},
    onImagePress: () => {},
    onProjectPress: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const { post } = this.props;

    return !isEqual(post, nextProps.post);
  }

  render() {
    const {
      post,
      onUserPress,
      onActionButtonPress,
      onImagePress,
      onProjectPress,
    } = this.props;

    return (
      <Surface style={styles.container}>
        <View style={styles.profileContainer}>
          <Avatar
            image={post.author.image}
            onPress={() => onUserPress(post.author.id)}
            size={Size.postProfileImageSize}
            borderRadius={Size.postProfileImageSize / 2}
          />
          <View style={styles.infoContainer}>
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>
                {post.author.name}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>
                {timeAgo(post.insertedAt)}
              </Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.actionButtonContainer}>
              <ActionMenuButton onPress={() => onActionButtonPress(post)} />
            </View>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            {post.message}
          </Text>
        </View>
        <Ripple
          style={styles.imageContainer}
          onPress={() => onImagePress(post.id)}
        >
          <ImageView
            style={styles.image}
            uri={post.thumbnail ? post.thumbnail.image : null}
            width={Dimensions.get('window').width - 20}
            aspectRatio={4 / 3}
            amount={post.photosCount}
          />
        </Ripple>
        {
          post.relatedProjectType === 'project' ? (
            <TouchableOpacity
              style={styles.sourceContainer}
              onPress={() => onProjectPress(post.relatedProject.id)}
            >
              <Text style={styles.source}>
                {post.relatedProject.name}
              </Text>
            </TouchableOpacity>

          ) : (
            <View style={styles.sourceContainer}>
              <Text style={[styles.source, styles.customSource]}>
                {post.relatedProjectName}
              </Text>
            </View>
          )
        }
      </Surface>
    );
  }
}
