//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

// create a component
class PreloadScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
        />
      </View>
    );
  }
}

export default PreloadScreen;
