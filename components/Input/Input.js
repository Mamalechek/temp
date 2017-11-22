import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  }

  static defaultProps = {
    placeholder: ''
  }

  render() {
    return (
      <TextInput
        style={styles.textInput}
        {...this.props}
      />
    );
  }
}

export default Input;
