import {TextInput} from 'react-native';

export const CustomInput = ({
  placeholder,
  style,
  placeholderTextColor,
  value,
  onChange,
  isSecure,
  keyboardType,
  color,
}) => {
  return (
    <TextInput
      onChangeText={value => onChange(value)}
      value={value}
      placeholder={placeholder}
      style={style}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={isSecure}
      keyboardType={keyboardType || 'default'}
      color={color}
    />
  );
};
