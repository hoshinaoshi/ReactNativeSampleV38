import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Analytics from 'expo-firebase-analytics';

export default class App extends React.Component {
  async componentDidMount(){
    // デバッグ用の設定
    if(Constants.manifest.releaseChannel != "production"){
      Analytics.setDebugModeEnabled(true);
    }

    await Analytics.logEvent('componentDidMount', {
      name: 'react events',
      screen: 'app',
      purpose: 'Opens the App',
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
