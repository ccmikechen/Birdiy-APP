import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'expo';

import LoadingIndicator from '../../components/LoadingIndicator';
import PostImageSlider from '../../containers/PostImageSlider';

import styles from './styles';

export default class PostImagesScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      post: PropTypes.object,
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  render() {
    const { navigation, query, loading } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />

        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Icon.MaterialIcons
              name="close"
              size={30}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <PostImageSlider post={query.post} />
          )}
        </View>
      </View>
    );
  }
}
