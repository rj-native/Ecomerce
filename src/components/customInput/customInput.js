import { TextInput } from 'react-native';

export const CustomInput = ({
  placeholder,
  style,
  placeholderTextColor,
  value,
  onChange,
  isSecure,
  keyboardType,
  color,
  onFocus,
  editable,
}) => {
  return (
    <TextInput
      onChangeText={(value) => onChange(value)}
      value={value}
      placeholder={placeholder}
      style={style}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={isSecure}
      keyboardType={keyboardType || 'default'}
      color={color}
      onFocus={onFocus}
      editable={editable}
    />
  );
};
