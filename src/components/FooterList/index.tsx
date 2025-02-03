import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';

export const ListFooter = ({loading, noNextPages}: any) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator testID="activity-indicator" size={20} />
      ) : null}
      {noNextPages && (
        <View style={styles.noNextPage}>
          <Typography variant="caption">
            No hay más páginas disponibles
          </Typography>
        </View>
      )}
    </>
  );
};
