import * as React from 'react';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "一覧",
  };
  render() {
    return (
      <Button
        title="詳細画面へ"
        onPress={() => this.props.navigation.navigate("Detail")}
      />
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: "詳細",
  };
  render() {
    return (
      <Button
        title="一覧画面へ"
        onPress={() => this.props.navigation.goBack()}
      />
    );
  }
}
export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
