import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import UserProfileAddButton from '../UserProfileAddButton';
import MoreButton from '../MoreButton';
import ActionMenuButton from '../ActionMenuButton';
import MyPostActions from '../MyPostActions';

import Size from '../../constants/Size';

import styles from './styles';

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class UserPostsScene extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      insertedAt: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        image: PropTypes.string.isRequired,
      }),
    })).isRequired,
    editable: PropTypes.bool.isRequired,
    onMorePress: PropTypes.func,
    onAddPress: PropTypes.func,
    onOpenPost: PropTypes.func,
    onEditPost: PropTypes.func,
    onDeletePost: PropTypes.func,
  };

  static defaultProps = {
    onMorePress: () => {},
    onAddPress: () => {},
    onOpenPost: () => {},
    onEditPost: () => {},
    onDeletePost: () => {},
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.posts),
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { posts } = nextProps;
    const { dataSource } = prevState;

    return {
      ...prevState,
      dataSource: dataSource.cloneWithRows(posts),
    };
  }

  renderRow = (post) => {
    const {
      onOpenPost,
      onEditPost,
      onDeletePost,
      editable,
    } = this.props;

    return (
      <Surface style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => onOpenPost(post.id)}
        >
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
                {post.insertedAt}
              </Text>
            </View>
          </View>
          {editable ? (
            <View style={styles.optionContainer}>
              <ActionMenuButton
                onPress={() => this.actions.show(post)}
              />
            </View>
          ) : null}
        </TouchableOpacity>
        <MyPostActions
          ref={(ref) => { this.actions = ref; }}
          onEditPost={({ id }) => onEditPost(id)}
          onDeletePost={({ id }) => onDeletePost(id)}
        />
      </Surface>
    );
  };

  render() {
    const { onMorePress, onAddPress, editable } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
        {editable ? (
          <View style={styles.addButtonContainer}>
            <UserProfileAddButton
              text={i18n.t('post.create.title')}
              onPress={onAddPress}
            />
          </View>
        ) : null}
        <ListView
          {...this.props}
          style={styles.listView}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
        <View style={styles.moreButtonContainer}>
          <MoreButton onPress={onMorePress} />
        </View>
      </View>
    );
  }
}
