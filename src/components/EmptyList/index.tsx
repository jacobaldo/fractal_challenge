import React from 'react';
import {View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';

export const EmptyList = () => {
  return (
    <View testID="empty-list" style={styles.emptyList}>
      <Typography variant="subtitle">Lo sentímos</Typography>
      <Typography variant="body">No hay usuarios</Typography>
    </View>
  );
};
