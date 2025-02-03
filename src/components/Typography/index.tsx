import React from 'react';
import {Text} from 'react-native';
import {TypographyProps} from './types';
import {typographyStyles} from './styles';

const Typography = ({variant, children, style}: TypographyProps) => {
  return <Text style={[typographyStyles[variant], style]}>{children}</Text>;
};

export default Typography;
