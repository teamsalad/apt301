import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Lightning extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;
    return {
      title:
        '번개 No. ' + navigation.getParam('lightningId', '알 수 없는 번개'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const {navigation} = this.props;
    const {params} = this.props.navigation.state;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          번개장
          {JSON.stringify(
            navigation.getParam('hostNickname', '알 수 없는 유저'),
          )}
        </Text>
        <Text>시간 {params.time}</Text>
      </View>
    );
  }
}
