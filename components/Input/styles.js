import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },
  textInput: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    fontFamily: fonts.SOURCE_SANS_PRO_BOLD,
    fontSize: 24,
    color: colors.thirdColor
  }
});

export {
  styles
};