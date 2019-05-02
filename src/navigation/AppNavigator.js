import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { fromBottom } from 'react-navigation-transitions';

import DrawerScreen from '../containers/DrawerScreen';
import MainTabNavigator from './MainTabNavigator';

import CreateProjectScreen from '../containers/CreateProjectScreen';
import EditProjectScreen from '../containers/EditProjectScreen';
import EditPostScreen from '../containers/EditPostScreen';
import SettingScreen from '../screens/SettingScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import PostImagesScreen from '../containers/PostImagesScreen';

const modals = {
  CreateProjectModal: CreateProjectScreen,
  EditProjectModal: EditProjectScreen,
  EditPostModal: EditPostScreen,
  SettingModal: SettingScreen,
  SelectCategoryModal: SelectCategoryScreen,
  CreatePostModal: CreatePostScreen,
  PostImagesModal: PostImagesScreen,
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
    ...fromBottom(),
  }),
}));
