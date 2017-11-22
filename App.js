import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Font } from 'expo';

import PreloadScreen from './features/PreloadScreen';
import LoginScreen from './features/LoginScreen';
import { styles } from './styles';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.otf'),
      'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.otf'),
      'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
      'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <PreloadScreen />
    }

    return <LoginScreen />;
  }
}
