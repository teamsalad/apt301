import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class SettingsScene extends Component {
  static navigationOptions = {
    title: '설정',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>설정 리스트</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: SettingsScene,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
