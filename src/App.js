import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  FeedScene,
  LightningScene,
  NotificationsScene,
  SettingsScene,
} from './scenes';

const TabNavigator = createBottomTabNavigator(
  {
    피드: FeedScene,
    번개: LightningScene,
    알림: NotificationsScene,
    설정: SettingsScene,
  },
  {
    initialRouteName: '피드',
  },
);

export default createAppContainer(TabNavigator);
