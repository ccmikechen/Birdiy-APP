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

import MyProfileAddButton from '../MyProfileAddButton';
import MoreButton from '../MoreButton';

import Size from '../../constants/Size';

import styles from './styles';

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class MyPostsScene extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      insertedAt: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        image: PropTypes.string.isRequired,
      }),
    })).isRequired,
    onMorePress: PropTypes.func,
    onAddPress: PropTypes.func,
    onPostPress: PropTypes.func,
  };

  static defaultProps = {
    onMorePress: () => {},
    onAddPress: () => {},
    onPostPress: () => {},
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
    const { onPostPress } = this.props;

    return (
      <Surface style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => onPostPress(post.id)}
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
                size={Size.myProjectListImageSize / 2}
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
        </TouchableOpacity>
      </Surface>
    );
  };

  render() {
    const { onMorePress, onAddPress } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
        <View style={styles.addButtonContainer}>
          <MyProfileAddButton
            text="新增投稿"
            onPress={onAddPress}
          />
        </View>
        <ListView
          {...this.props}
          style={styles.listView}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
        <View style={styles.moreButtonContainer}>
          <MoreButton
            text="更多"
            onPress={onMorePress}
          />
        </View>
      </View>
    );
  }
}
