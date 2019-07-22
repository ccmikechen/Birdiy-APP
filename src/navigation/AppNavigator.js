import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import createMainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/LoginScreen';
import CreateProjectScreen from '../containers/CreateProjectScreen';
import EditProjectScreen from '../containers/EditProjectScreen';
import EditPostScreen from '../containers/EditPostScreen';
import SelectTopicScreen from '../containers/SelectTopicScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import PostImagesScreen from '../containers/PostImagesScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileSettingScreen from '../containers/ProfileSettingScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import NotificationSettingScreen from '../screens/NotificationSettingScreen';
import AboutScreen from '../screens/AboutScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import SearchDetailScreen from '../screens/SearchDetailScreen';
import SelectorScreen from '../screens/SelectorScreen';

const modals = {
  LoginModal: LoginScreen,
  CreateProjectModal: CreateProjectScreen,
  EditProjectModal: EditProjectScreen,
  EditPostModal: EditPostScreen,
  SelectTopicModal: SelectTopicScreen,
  CreatePostModal: CreatePostScreen,
  PostImagesModal: PostImagesScreen,
  SettingModal: SettingScreen,
  ProfileSettingModal: ProfileSettingScreen,
  AccountSettingModal: AccountSettingScreen,
  DisplaySettingModal: DisplaySettingScreen,
  NotificationSettingModal: NotificationSettingScreen,
  AboutModal: AboutScreen,
  FeedbackModal: FeedbackScreen,
  SearchDetailModal: SearchDetailScreen,
  SelectorModal: SelectorScreen,
};

export default async () => createAppContainer(createStackNavigator({
  Main: await createMainTabNavigator(),
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
