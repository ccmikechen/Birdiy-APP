import {
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import DrawerScreen from '../screens/DrawerScreen';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createDrawerNavigator({
  Main: MainTabNavigator,
}, {
  initialRouteName: 'Main',
  contentComponent: DrawerScreen,
  drawerWidth: 300,
}));
