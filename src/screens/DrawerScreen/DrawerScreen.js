import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { LinearGradient, Icon } from 'expo';

import PostButton from '../../components/PostButton';
import DrawerMenu from '../../components/DrawerMenu';
import DrawerMenuItem from '../../components/DrawerMenuItem';

import { DEFAULT_PROFILE } from '../../images';

import { Primary, Base } from '../../constants/Colors';

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

  navigateToScreen = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  renderIcon = (IconComponent, name) => () => (
    <IconComponent
      name={name}
      size={30}
      color="#666666"
    />
  );

  renderMenu = () => (
    <View style={styles.menuContainer}>
      <DrawerMenu>
        <DrawerMenuItem
          title="首頁"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'home')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="升級VIP"
          renderIcon={this.renderIcon(Icon.MaterialCommunityIcons, 'crown')}
          onPress={this.navigateToScreen('Home')}
        />
      </DrawerMenu>
      <DrawerMenu style={styles.menu} title="我的工作坊">
        <DrawerMenuItem
          title="我的分享"
          renderIcon={this.renderIcon(Icon.MaterialCommunityIcons, 'lightbulb-on')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="我的DIY"
          renderIcon={this.renderIcon(Icon.Entypo, 'tools')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="DIY統計"
          renderIcon={this.renderIcon(Icon.MaterialCommunityIcons, 'chart-bar')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="我的收藏"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'folder-special')}
          onPress={this.navigateToScreen('Home')}
        />
      </DrawerMenu>
      <DrawerMenu style={styles.menu} title="其他">
        <DrawerMenuItem
          title="近期瀏覽"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'history')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="關於Wediy"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'info')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="意見回饋"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'feedback')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="設定"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'settings')}
          onPress={this.navigateToScreen('Home')}
        />
      </DrawerMenu>
    </View>
  );

  render() {
    const { profile } = this.props;

    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          style={styles.headerContainer}
          colors={['#4c669f', '#3b5998', '#192f6a']}
        >
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
                <Text style={styles.profileHint}>我的工作坊</Text>
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
              color={Base.primaryText}
              backgroundColor={Primary(600)}
            />
          </View>
        </LinearGradient>
        {this.renderMenu()}
      </ScrollView>
    );
  }
}
