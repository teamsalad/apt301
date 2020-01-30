import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class Feed extends Component {
  static navigationOptions = {
    title: '피드',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="번개 1"
          onPress={() => {
            this.props.navigation.navigate('Lightning', {
              lightningId: 1,
              hostNickname: 'aquinas.choi',
              time: '20:00',
            });
          }}
        />
        <Button
          title="번개 2"
          onPress={() => {
            this.props.navigation.navigate('Lightning', {
              lightningId: 2,
              hostNickname: 'youngjun.choi',
              time: '19:00',
            });
          }}
        />
        <Button
          title="알림"
          onPress={() => {
            this.props.navigation.navigate('Notifications', {
              toggle: true,
            });
          }}
        />
        <Button
          title="설정"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}
