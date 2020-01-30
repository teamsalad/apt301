import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class NotificationsScene extends Component {
  static navigationOptions = {
    title: '알림',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>알림 리스트</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: NotificationsScene,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
