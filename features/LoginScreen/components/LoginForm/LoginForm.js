//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, ActionButton } from '../../../../components';
import { styles } from './styles';

// create a component
class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  onChangeText = (key) => (text) => {
    this.setState({ [key]: text });
  }

  onLoginPress = () => {
    alert('Pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.username}
          onChangeText={this.onChangeText('username')}
          placeholder={'Username'}
          autoCorrect={false}
        />
        <Input
          onChangeText={this.onChangeText('password')}
          secureTextEntry={true}
          placeholder={'Password'}
          autoCorrect={false}
        />
        <ActionButton
          title={'Login'}
          onPress={this.onLoginPress}
        />
      </View>
    );
  }
}

export default LoginForm;
