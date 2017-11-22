import { StyleSheet } from 'react-native';

import { colors, fonts, opacities } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: colors.secondaryColor
  },
  buttonText: {
    fontFamily: fonts.OSWALD_NORMAL,
    fontSize: 23,
    color: colors.secondaryFontColor,
    letterSpacing: 1
  }
});

export {
  styles,
  opacities
};