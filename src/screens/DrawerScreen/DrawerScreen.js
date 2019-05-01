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
import LoadingIndicator from '../../components/LoadingIndicator';

import { DEFAULT_PROFILE } from '../../images';

import { Primary, TextColor } from '../../constants/Colors';

import styles from './styles';

export default class DrawerScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      closeDrawer: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        followingCount: PropTypes.number,
        followerCount: PropTypes.number,
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
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
          title="我的專案"
          renderIcon={this.renderIcon(Icon.Entypo, 'tools')}
          onPress={this.navigateToScreen('UserProjects')}
        />
        <DrawerMenuItem
          title="我的投稿"
          renderIcon={this.renderIcon(Icon.MaterialCommunityIcons, 'lightbulb-on')}
          onPress={this.navigateToScreen('UserPosts')}
        />
        <DrawerMenuItem
          title="我的收藏"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'folder-special')}
          onPress={this.navigateToScreen('UserFavorites')}
        />
        <DrawerMenuItem
          title="採買清單"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'shopping-cart')}
          onPress={this.navigateToScreen('Cart')}
        />
      </DrawerMenu>
      <DrawerMenu style={styles.menu} title="其他">
        <DrawerMenuItem
          title="近期瀏覽"
          renderIcon={this.renderIcon(Icon.MaterialIcons, 'history')}
          onPress={this.navigateToScreen('Home')}
        />
        <DrawerMenuItem
          title="關於Birdiy"
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
          onPress={this.navigateToScreen('SettingModal')}
        />
      </DrawerMenu>
    </View>
  );

  render() {
    const { query, loading } = this.props;

    return loading ? (
      <LoadingIndicator />
    ) : (
      <ScrollView style={styles.container}>
        <LinearGradient
          style={styles.headerContainer}
          colors={['#64a1bc', '#3b5998', '#192f6a']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={this.navigateToScreen('Profile')}
          >
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={query.viewer.image ? { uri: query.viewer.image } : DEFAULT_PROFILE}
              />
            </View>
            <View style={styles.profileInfoContainer}>
              <View style={styles.profileNameContainer}>
                <Text style={styles.profileName}>{ query.viewer.name }</Text>
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
              <Text style={styles.followingNumber}>{ query.viewer.followingCount }</Text>
              <Text style={styles.following}>跟隨中</Text>
            </View>
            <View style={styles.followingContainer}>
              <Text style={styles.followingNumber}>{ query.viewer.followerCount }</Text>
              <Text style={styles.following}>跟隨者</Text>
            </View>
          </View>
          <View style={styles.postButtonContainer}>
            <PostButton
              color={TextColor.primaryLight}
              backgroundColor={Primary(600)}
            />
          </View>
        </LinearGradient>
        {this.renderMenu()}
      </ScrollView>
    );
  }
}
