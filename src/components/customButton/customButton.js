import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const CustomButton = ({title, color, style, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={{color: color}}>{title}</Text>
    </TouchableOpacity>
  );
};
