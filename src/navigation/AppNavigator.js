import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import DrawerScreen from '../screens/DrawerScreen';
import MainTabNavigator from './MainTabNavigator';

import CreateProjectScreen from '../screens/CreateProjectScreen';
import SettingScreen from '../screens/SettingScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';

const modals = {
  CreateProjectModal: CreateProjectScreen,
  SettingModal: SettingScreen,
  SelectCategoryModal: SelectCategoryScreen,
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
