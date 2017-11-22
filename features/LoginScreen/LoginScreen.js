//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { LoginForm } from './components';
import { images } from '../../images';
import { styles } from './styles';

// create a component
class LoginScreen extends Component {
  onError = () => {
    alert('Error');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode={'stretch'}
            onError={this.onError}
          />
        </View>
        <LoginForm />
      </View>
    );
  }
}

export default LoginScreen;
