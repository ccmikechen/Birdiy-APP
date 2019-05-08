import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import DrawerScreen from '../containers/DrawerScreen';
import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/LoginScreen';
import CreateProjectScreen from '../containers/CreateProjectScreen';
import EditProjectScreen from '../containers/EditProjectScreen';
import EditPostScreen from '../containers/EditPostScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import PostImagesScreen from '../containers/PostImagesScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileSettingScreen from '../containers/ProfileSettingScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import NotificationSettingScreen from '../screens/NotificationSettingScreen';
import AboutScreen from '../screens/AboutScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const modals = {
  LoginModal: LoginScreen,
  CreateProjectModal: CreateProjectScreen,
  EditProjectModal: EditProjectScreen,
  EditPostModal: EditPostScreen,
  SelectCategoryModal: SelectCategoryScreen,
  CreatePostModal: CreatePostScreen,
  PostImagesModal: PostImagesScreen,
  SettingModal: SettingScreen,
  ProfileSettingModal: ProfileSettingScreen,
  AccountSettingModal: AccountSettingScreen,
  DisplaySettingModal: DisplaySettingScreen,
  NotificationSettingModal: NotificationSettingScreen,
  AboutModal: AboutScreen,
  FeedbackModal: FeedbackScreen,
};

export default createAppContainer(createStackNavigator({
  Main: createDrawerNavigator({
    MainTab: MainTabNavigator,
  }, {
    initialRouteName: 'MainTab',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  }),
  ...modals,
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: 1,
  },
  transitionConfig: () => ({
    containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    ...fromRight(),
  }),
}));
