import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { toUpper } from 'lodash';

import { styles, opacities } from './styles';

const ActionButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={opacities.touchable}
      style={styles.container}
    >
      <Text style={styles.buttonText}>{ toUpper(props.title) }</Text>
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  onPress: PropTypes.func.isRequried,
  title: PropTypes.string.isRequired
};

export default ActionButton;
