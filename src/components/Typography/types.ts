import {TextStyle} from 'react-native';

export type TypographyVariant =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'small';

export interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: TextStyle;
}
