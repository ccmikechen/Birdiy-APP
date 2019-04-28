import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import DrawerScreen from '../containers/DrawerScreen';
import MainTabNavigator from './MainTabNavigator';

import CreateProjectScreen from '../containers/CreateProjectScreen';
import EditProjectScreen from '../containers/EditProjectScreen';
import EditPostScreen from '../containers/EditPostScreen';
import SettingScreen from '../screens/SettingScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';

const modals = {
  CreateProjectModal: CreateProjectScreen,
  EditProjectModal: EditProjectScreen,
  EditPostModal: EditPostScreen,
  SettingModal: SettingScreen,
  SelectCategoryModal: SelectCategoryScreen,
  CreatePostModal: CreatePostScreen,
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
}));
