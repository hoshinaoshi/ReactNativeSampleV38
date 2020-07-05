import * as React from 'react';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

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

function BottomNavigation() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Detail" component={DetailScreen} />
    </BottomTab.Navigator>
  );
}

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="App" component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
