import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Feed, Lightning, Notifications, Settings} from './scenes';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: 'gainsboro'}} />
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="dark-content" />
        <Lightning />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
