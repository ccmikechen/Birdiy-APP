import React from 'react';
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

import Colors from '../constants/Colors';

const sharedScreens = {
  Setting: SettingScreen,
};

const tabBarIcon = icon => props => ( // eslint-disable-line react/prop-types
  <TabBarIcon {...props} name={icon} />
);

const tabBarOptions = {
  activeTintColor: Colors.tabIconSelected,
};

export default createBottomTabNavigator({
  HomeStack: createStackNavigator({
    Home: HomeScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '首頁',
      tabBarIcon: tabBarIcon('home'),
      tabBarOptions,
    },
  }),
  TimelineStack: createStackNavigator({
    Timeline: TimelineScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '分享',
      tabBarIcon: tabBarIcon('timeline'),
      tabBarOptions,
    },
  }),
  SearchStack: createStackNavigator({
    Search: SearchScreen,
    ...sharedScreens,
  }, {
    navigationOptions: {
      tabBarLabel: '搜尋DIY',
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
