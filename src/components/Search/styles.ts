import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: spacings.md,
  },
  input: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: borderRadius['3xl'],
    paddingHorizontal: spacings.md,
  },
});
