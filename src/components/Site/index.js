import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Site extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://facebook.github.io/react-native/'}} />
    );
  }
}

export default Site;
