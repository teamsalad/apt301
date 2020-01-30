import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class SettingsImage extends Component {
  render() {
    return (
      <Image
        source={require('../../assets/images/settings.png')}
        style={{width: 30, height: 30}}
      />
    );
  }
}

export default class Settings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => <SettingsImage />,
    };
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>설정 리스트</Text>
      </View>
    );
  }
}
