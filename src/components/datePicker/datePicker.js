import React from 'react';
import DatePicker from 'react-native-date-picker';

export const DatePickers = ({
  mode,
  open,
  date,
  onConfrim,
  onCancel,
  editable,
  ...props
}) => {
  return (
    <DatePicker
      mode={mode}
      open={open}
      date={date}
      onConfrim={onConfrim}
      onCancel={onCancel}
      editable={editable}
      {...props}
    />
  );
};
