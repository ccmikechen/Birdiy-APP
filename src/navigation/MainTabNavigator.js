import React from 'react';
import { Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBar from '../components/TabBar';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import SearchDetailScreen from '../screens/SearchDetailScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import SearchUserScreen from '../screens/SearchUserScreen';
import CartScreen from '../screens/CartScreen';
import UserFilterScreen from '../screens/UserFilterScreen';

import Colors from '../constants/Colors';

const sharedScreens = {
  Setting: SettingScreen,
};

const noAnimationTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const tabBarIcon = icon => props => ( // eslint-disable-line react/prop-types
  <TabBarIcon {...props} name={icon} />
);

const tabBarOptions = {
  activeTintColor: Colors.tabIconSelected,
};

export default createBottomTabNavigator({
  HomeStack: createStackNavigator({
    Home: HomeScreen,
    SearchDetail: SearchDetailScreen,
    Cart: CartScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '首頁',
      tabBarIcon: tabBarIcon('home'),
      tabBarOptions,
    },
    transitionConfig: noAnimationTransitionConfig,
  }),
  TimelineStack: createStackNavigator({
    Timeline: TimelineScreen,
    PostDetail: PostDetailScreen,
    SearchUser: SearchUserScreen,
    UserFilter: UserFilterScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '動態',
      tabBarIcon: tabBarIcon('timeline'),
      tabBarOptions,
    },
    transitionConfig: noAnimationTransitionConfig,
  }),
  SearchStack: createStackNavigator({
    Search: SearchScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '瀏覽DIY',
      tabBarIcon: tabBarIcon('search'),
      tabBarOptions,
    },
  }),
  NotificationStack: createStackNavigator({
    Notification: NotificationScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '通知',
      tabBarIcon: tabBarIcon('notifications'),
      tabBarOptions,
    },
  }),
  ProfileStack: createStackNavigator({
    Profile: ProfileScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '我的工作坊',
      tabBarIcon: tabBarIcon('person'),
      tabBarOptions,
    },
  }),
}, {
  tabBarComponent: TabBar,
});
