import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {borderRadius, spacings} from '../../constants/spacings';

export default StyleSheet.create({
  cardUser: {
    backgroundColor: '#fff',
    padding: spacings.md,
    borderRadius: borderRadius.lg,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    marginVertical: spacings.sm,
    marginHorizontal: spacings.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacings.md,
  },
  profileImage: {
    width: 50,
    height: 50,
    backgroundColor: colors.tertiary,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  numberCard: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: borderRadius['3xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: colors.secondary,
  },
});
