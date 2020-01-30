import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Feed, Lightning, Notifications, Settings} from './scenes';

const AppNavigator = createStackNavigator(
  {
    Feed: Feed,
    Lightning: Lightning,
    Notifications: Notifications,
    Settings: Settings,
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
