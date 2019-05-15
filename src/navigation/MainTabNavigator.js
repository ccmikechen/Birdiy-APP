import React from 'react';
import { Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import i18n from 'i18n-js';

import TabBar from '../components/TabBar';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../containers/HomeScreen';
import TimelineScreen from '../containers/TimelineScreen';
import ProjectsScreen from '../containers/ProjectsScreen';
import ProfileScreen from '../containers/ProfileScreen';
import SearchDetailScreen from '../screens/SearchDetailScreen';
import SearchUserScreen from '../screens/SearchUserScreen';
import CartScreen from '../screens/CartScreen';
import UserFilterScreen from '../screens/UserFilterScreen';
import ProjectDetailScreen from '../containers/ProjectDetailScreen';
import MyProjectsScreen from '../containers/MyProjectsScreen';
import MyPostsScreen from '../containers/MyPostsScreen';
import MyFavoritesScreen from '../containers/MyFavoritesScreen';
import UserProjectsScreen from '../containers/UserProjectsScreen';
import UserPostsScreen from '../containers/UserPostsScreen';
import UserFavoritesScreen from '../containers/UserFavoritesScreen';
import UserScreen from '../containers/UserScreen';
import RecentViewedScreen from '../containers/RecentViewedScreen';

import Colors from '../constants/Colors';

const sharedScreens = {
  ProjectDetail: ProjectDetailScreen,
  User: UserScreen,
  UserProjects: UserProjectsScreen,
  UserPosts: UserPostsScreen,
  UserFavorites: UserFavoritesScreen,
  SearchDetail: SearchDetailScreen,
  RecentViewed: RecentViewedScreen,
};

const noAnimationTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const tabBarIcon = icon => props => (
  <TabBarIcon {...props} name={icon} />
);

const tabBarOptions = {
  activeTintColor: Colors.tabIconSelected,
};

export default createBottomTabNavigator({
  HomeStack: createStackNavigator({
    Home: HomeScreen,
    Cart: CartScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: i18n.t('home.title'),
      tabBarIcon: tabBarIcon('home'),
      tabBarOptions,
    },
    transitionConfig: noAnimationTransitionConfig,
  }),
  TimelineStack: createStackNavigator({
    Timeline: TimelineScreen,
    SearchUser: SearchUserScreen,
    UserFilter: UserFilterScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: i18n.t('timeline.title'),
      tabBarIcon: tabBarIcon('timeline'),
      tabBarOptions,
    },
    transitionConfig: noAnimationTransitionConfig,
  }),
  ProjectsStack: createStackNavigator({
    Projects: ProjectsScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: i18n.t('projects.title'),
      tabBarIcon: tabBarIcon('search'),
      tabBarOptions,
    },
    transitionConfig: noAnimationTransitionConfig,
  }),
  ProfileStack: createStackNavigator({
    Profile: ProfileScreen,
    MyProjects: MyProjectsScreen,
    MyPosts: MyPostsScreen,
    MyFavorites: MyFavoritesScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: i18n.t('profile.title'),
      tabBarIcon: tabBarIcon('person'),
      tabBarOptions,
    },
    transitionConfig: noAnimationTransitionConfig,
  }),
}, {
  tabBarComponent: TabBar,
});
