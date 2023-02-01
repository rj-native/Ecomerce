import { Switch } from 'react-native';

export const ToggleButton = ({
  value,
  onValueChange,
  style,
  trackColor,
  ios_backgroundColor,
  thumbColor,
}) => {
  return (
    <Switch
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={ios_backgroundColor}
      onValueChange={onValueChange}
      value={value}
      style={style}
    ></Switch>
  );
};
