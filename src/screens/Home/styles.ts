import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {borderRadius, spacings} from '../../constants/spacings';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mode: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    borderRadius: borderRadius['3xl'],
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: 45,
    height: 45,
    overflow: 'hidden',
    marginBottom: spacings.md,
    zIndex: 10,
  },
  textMode: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
