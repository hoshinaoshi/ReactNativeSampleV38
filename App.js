import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {alert("A Button onPress")}}
          title="ボタンA"
        />
        <Button
          color="red"
          onPress={() => {alert("B Button onPress")}}
          title="ボタンB"
        />
        <Button
          disabled={true}
          onPress={() => {alert("C Button onPress")}}
          title="ボタンC"
        />
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
