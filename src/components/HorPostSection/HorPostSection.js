import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import { Surface, TouchableRipple } from 'react-native-paper';
import { isEqual } from 'lodash';

import ActionMenuButton from '../ActionMenuButton';

import { timeAgo } from '../../helpers/datetime';

import Size from '../../constants/Size';

import styles from './styles';

export default class HorPostSection extends Component {
  static propTypes = {
    post: PropTypes.shape({
      insertedAt: PropTypes.number,
      message: PropTypes.string,
      thumbnail: PropTypes.shape({
        image: PropTypes.string,
      }),
    }).isRequired,
    onPress: PropTypes.func,
    hasActions: PropTypes.bool,
    onActionButtonPress: PropTypes.func,
  };

  static defaultProps = {
    onPress: () => {},
    hasActions: false,
    onActionButtonPress: () => {},
  };

  shouldComponentUpdate(nextProps) {
    const { post } = this.props;
    return !isEqual(post, nextProps.post);
  }

  render() {
    const {
      post,
      onPress,
      hasActions,
      onActionButtonPress,
    } = this.props;

    return (
      <Surface style={styles.rowContainer}>
        <TouchableRipple
          style={styles.touchable}
          onPress={onPress}
        >
          <View style={styles.touchable}>
            <View style={styles.imageContainer}>
              {post.thumbnail ? (
                <Image
                  source={{ uri: post.thumbnail.image }}
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
              <View style={styles.messageContainer}>
                <Text style={styles.message} numberOfLines={3}>
                  {post.message}
                </Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>
                  {timeAgo(post.insertedAt)}
                </Text>
              </View>
            </View>
            {hasActions ? (
              <View style={styles.optionContainer}>
                <ActionMenuButton
                  onPress={onActionButtonPress}
                />
              </View>
            ) : null}
          </View>
        </TouchableRipple>
      </Surface>
    );
  }
}
