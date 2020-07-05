import * as React from 'react';
import { Button } from 'react-native';
import * as Linking from 'expo-linking';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "一覧",
  };
  _handleRedirect(event) {
    Linking.parse(event.url);
  };
  async componentDidMount() {
    Linking.addEventListener('url', this._handleRedirect);
  }
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

const prefix = Linking.makeUrl('/');
export default class App extends React.Component {
  render(){
    const linking = {
      prefixes: [prefix],
      config: {
        Home: "home",
        Detail: "detail",
      },
    };
    return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
