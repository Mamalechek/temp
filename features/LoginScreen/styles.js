import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: colors.primaryBackgroundColor
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
   //  backgroundColor: 'blue'
  },
  logo: {
    width: '100%',
    height: 70
  }
});

export {
  styles
};