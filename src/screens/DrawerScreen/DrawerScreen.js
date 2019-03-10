import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import PostButton from '../../components/PostButton';

import { DEFAULT_PROFILE } from '../../images';

import styles from './styles';

export default class DrawerScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      closeDrawer: PropTypes.func.isRequired,
    }).isRequired,
    profile: PropTypes.shape({
      name: PropTypes.string,
      followingCount: PropTypes.number,
      followerCount: PropTypes.number,
    }),
  };

  static defaultProps = {
    profile: {
      name: '無名氏',
      followingCount: 0,
      followerCount: 0,
    },
  };

  renderItem = screen => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={this.navigateToScreen(screen)}
    >
      <Text>
        { screen }
      </Text>
    </TouchableOpacity>
  );

  navigateToScreen = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  render() {
    const { profile } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={DEFAULT_PROFILE}
              />
            </View>
            <View style={styles.profileInfoContainer}>
              <View style={styles.profileNameContainer}>
                <Text style={styles.profileName}>{ profile.name }</Text>
              </View>
              <View style={styles.profileHintContainer}>
                <Text style={styles.profileHint}>我的工作室</Text>
              </View>
            </View>
            <View style={styles.profileLevelContainer}>
              <Image style={styles.profileLevelImage} />
            </View>
          </TouchableOpacity>
          <View style={styles.relationInfoContainer}>
            <View style={styles.followingContainer}>
              <Text style={styles.followingNumber}>{ profile.followingCount }</Text>
              <Text style={styles.following}>個關注中</Text>
            </View>
            <View style={styles.followingContainer}>
              <Text style={styles.followingNumber}>{ profile.followerCount }</Text>
              <Text style={styles.following}>個被關注</Text>
            </View>
          </View>
          <View style={styles.postButtonContainer}>
            <PostButton
              color="#ffffff"
              backgroundColor="#44aa44"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
