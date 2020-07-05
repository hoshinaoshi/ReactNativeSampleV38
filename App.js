import React from 'react';
import { View, Button } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default class App extends React.Component {
  _handleOpenWithLinking = () => {
    Linking.openURL("sms://+123456789");
  }

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <Button
          title="LinkingコンポーネントでSMSアプリを開く"
          onPress={this._handleOpenWithLinking}
        />
        <Button
          title="WebBrowserコンポーネントでWebサイトを開く"
          onPress={this._handleOpenWithWebBrowser}
        />
      </View>
    );
  }
}
