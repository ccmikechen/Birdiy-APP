import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { LinearGradient, Icon } from 'expo';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-navigation';
import i18n from 'i18n-js';

import PostButton from '../../components/PostButton';
import DrawerMenu from '../../components/DrawerMenu';
import DrawerMenuItem from '../../components/DrawerMenuItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import AddPostButtonActions from '../../components/AddPostButtonActions';

import { DEFAULT_PROFILE } from '../../images';

import Colors, { Primary, TextColor } from '../../constants/Colors';

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

  handleLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginModal');
  };

  renderIcon = (IconComponent, name) => () => (
    <IconComponent
      name={name}
      size={30}
      color="#666666"
    />
  );

  renderHeader = () => {
    const { query, navigation } = this.props;

    if (!query.viewer) {
      return (
        <View style={styles.headerContainer}>
          <LoadingIndicator />
        </View>
      );
    }

    return (
      <LinearGradient
        style={styles.headerContainer}
        colors={Colors.headerGradient}
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
              <Text style={styles.profileHint}>
                {i18n.t('profile.title')}
              </Text>
            </View>
          </View>
          <View style={styles.profileLevelContainer}>
            <Image style={styles.profileLevelImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.relationInfoContainer}>
          <View style={styles.followingContainer}>
            <Text style={styles.followingNumber}>{ query.viewer.followingCount }</Text>
            <Text style={styles.following}>
              {i18n.t('profile.following')}
            </Text>
          </View>
          <View style={styles.followingContainer}>
            <Text style={styles.followingNumber}>{ query.viewer.followerCount }</Text>
            <Text style={styles.following}>
              {i18n.t('profile.follower')}
            </Text>
          </View>
        </View>
        <View style={styles.postButtonContainer}>
          <PostButton
            color={TextColor.primaryLight}
            backgroundColor={Primary(600)}
            onPress={() => this.addPostActions.show()}
          />
        </View>
        <AddPostButtonActions
          ref={(ref) => { this.addPostActions = ref; }}
          onAddPost={() => navigation.navigate('CreatePostModal')}
          onAddProject={() => navigation.navigate('CreateProjectModal')}
        />
      </LinearGradient>
    );
  };

  renderDefaultMenu = () => (
    <DrawerMenu>
      <DrawerMenuItem
        title={i18n.t('home.title')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'home')}
        onPress={this.navigateToScreen('Home')}
      />
      <DrawerMenuItem
        title={i18n.t('drawer.categories')}
        renderIcon={this.renderIcon(Icon.Entypo, 'grid')}
        onPress={this.navigateToScreen('AllCategoriesModal')}
      />
      <DrawerMenuItem
        title={i18n.t('drawer.vip')}
        renderIcon={this.renderIcon(Icon.MaterialCommunityIcons, 'crown')}
        onPress={this.navigateToScreen('Home')}
      />
    </DrawerMenu>
  );

  renderLoginMenu = () => (
    <DrawerMenu style={styles.menu} title={i18n.t('profile.title')}>
      <View style={styles.loginButtonContainer}>
        <Button
          mode="contained"
          color={Colors.loginButton}
          onPress={this.handleLoginPress}
        >
          {i18n.t('general.login')}
        </Button>
      </View>
    </DrawerMenu>
  );

  renderProfileMenu = () => (
    <DrawerMenu style={styles.menu} title={i18n.t('profile.title')}>
      <DrawerMenuItem
        title={i18n.t('drawer.myProjects')}
        renderIcon={this.renderIcon(Icon.Entypo, 'tools')}
        onPress={this.navigateToScreen('MyProjects')}
      />
      <DrawerMenuItem
        title={i18n.t('drawer.myPosts')}
        renderIcon={this.renderIcon(Icon.MaterialCommunityIcons, 'lightbulb-on')}
        onPress={this.navigateToScreen('MyPosts')}
      />
      <DrawerMenuItem
        title={i18n.t('drawer.myFavorites')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'folder-special')}
        onPress={this.navigateToScreen('MyFavorites')}
      />
      <DrawerMenuItem
        title={i18n.t('cart.title')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'shopping-cart')}
        onPress={this.navigateToScreen('Cart')}
      />
    </DrawerMenu>
  );

  renderOtherMenu = () => (
    <DrawerMenu style={styles.menu} title={i18n.t('drawer.other')}>
      <DrawerMenuItem
        title={i18n.t('recentViewed.title')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'history')}
        onPress={this.navigateToScreen('RecentViewed')}
      />
      <DrawerMenuItem
        title={i18n.t('about.title')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'info')}
        onPress={this.navigateToScreen('AboutModal')}
      />
      <DrawerMenuItem
        title={i18n.t('feedback.title')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'feedback')}
        onPress={this.navigateToScreen('FeedbackModal')}
      />
      <DrawerMenuItem
        title={i18n.t('settings.title')}
        renderIcon={this.renderIcon(Icon.MaterialIcons, 'settings')}
        onPress={this.navigateToScreen('SettingModal')}
      />
    </DrawerMenu>
  );

  renderMenu = () => {
    const { query } = this.props;
    const isLoggedIn = !!query.viewer;

    return (
      <View style={styles.menuContainer}>
        {this.renderDefaultMenu()}
        {isLoggedIn ? this.renderProfileMenu() : this.renderLoginMenu()}
        {this.renderOtherMenu()}
      </View>
    );
  };

  render() {
    const { loading } = this.props;

    return loading ? (
      <LoadingIndicator />
    ) : (
      <ScrollView style={styles.container}>
        {this.renderHeader()}
        {this.renderMenu()}
      </ScrollView>
    );
  }
}
