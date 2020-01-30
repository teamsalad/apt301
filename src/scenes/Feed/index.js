import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class FeedScene extends Component {
  static navigationOptions = {
    title: '피드',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="1"
          onPress={() => {
            this.props.navigation.navigate('Feed', {
              id: 1,
            });
          }}
        />
        <Button
          title="2"
          onPress={() => {
            this.props.navigation.navigate('Feed', {
              id: 2,
            });
          }}
        />
        <Button
          title="3"
          onPress={() => {
            this.props.navigation.navigate('Feed', {
              id: 3,
            });
          }}
        />
      </View>
    );
  }
}

class FeedFragment extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '피드 ' + navigation.getParam('id', '알 수 없음'),
    };
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          피드 {JSON.stringify(navigation.getParam('id', '알 수 없음'))} 정보
        </Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: FeedScene,
    Feed: FeedFragment,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
