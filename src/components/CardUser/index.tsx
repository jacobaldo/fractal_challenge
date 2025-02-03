import React from 'react';
import {Image, View} from 'react-native';
import {CardUserProps} from './types';
import styles from './styles';
import Typography from '../Typography';

const CardUser = ({item}: CardUserProps) => (
  <View style={styles.cardUser}>
    <View style={styles.row}>
      <Image
        source={{uri: `https://picsum.photos/seed/${item?.id ?? 1}/100`}}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Typography
          variant="title"
          style={styles.textTitle}>{`Usuario ${item?.userId}`}</Typography>
      </View>
      <View style={styles.numberCard}>
        <Typography variant="title">{`${item?.id}`}</Typography>
      </View>
    </View>
    <Typography variant="subtitle">{item?.title}</Typography>
    <Typography variant="caption">{item?.body}</Typography>
  </View>
);
export default CardUser;
