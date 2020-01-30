import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Notifications extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '알림 ' + navigation.getParam('toggle', 'true'),
    };
  };

  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>알림리스트</Text>
        <Button
          title="알림 설정 변경"
          onPress={() => {
            this.props.navigation.setParams({toggle: !params.toggle});
          }}
        />
      </View>
    );
  }
}
