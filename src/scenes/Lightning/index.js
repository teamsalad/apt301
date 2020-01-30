import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class LightningScene extends Component {
  static navigationOptions = {
    title: '번개',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>번개 리스트</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: LightningScene,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
