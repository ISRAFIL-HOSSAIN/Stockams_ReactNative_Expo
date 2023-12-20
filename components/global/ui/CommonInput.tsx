import React, { FC, useState } from 'react';
import { View, TextInput, Picker, DatePickerAndroid, CheckBox, PickerProps, TextInputProps } from 'react-native';

interface CommonInputProps extends TextInputProps, PickerProps {
  type: 'text' | 'dropdown' | 'checkbox' | 'datepicker' | 'number';
  options?: { label: string; value: string }[];
}

const CommonInput: FC<CommonInputProps> = ({ type, options, ...props }) => {
  if (type === 'text') {
    return (
      <View>
        <TextInput {...props} />
      </View>
    );
  } else if (type === 'dropdown') {
    return (
      <View>
        <Picker {...props}>
          {options?.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
    );
  } else if (type === 'checkbox') {
    return (
      <View>
        <CheckBox {...props} />
      </View>
    );
  } else if (type === 'datepicker') {
    // You may need to handle date picker logic based on your platform (iOS/Android)
    // For simplicity, this example uses DatePickerAndroid for Android
    const [selectedDate, setSelectedDate] = useState(new Date());

    const showDatePicker = async () => {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: selectedDate,
        });

        if (action !== DatePickerAndroid.dismissedAction) {
          const selected = new Date(year, month, day);
          setSelectedDate(selected);
          props.onDateChange && props.onDateChange(selected);
        }
      } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
      }
    };

    return (
      <View>
        <TextInput
          {...props}
          onFocus={showDatePicker}
          value={selectedDate.toDateString()} // You can format the date as needed
          editable={false}
        />
      </View>
    );
  } else if (type === 'number') {
    return (
      <View>
        <TextInput {...props} keyboardType="numeric" />
      </View>
    );
  }

  // Handle other types or provide a default
  return (
    <View>
      <TextInput {...props} />
    </View>
  );
};



export default CommonInput;
