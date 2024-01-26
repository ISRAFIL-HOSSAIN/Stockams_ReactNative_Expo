
// TextInput, Datepicker, email, password. ... 

import React, {  ForwardedRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomInputProps {
  passwordIcon?: any;
  setShowPassword?:any;
  icon?: any;
  name?: string;
  label?: string;
  defaultValue?: string | boolean;
  options?: string[]; // optional for select/dropdown
  PlaceHolder?: string;
  rules?: any;
  placeholder: string;
  autoCapitalize?: any;
  autoCompleteType?: any;
  keyboardType?: any;
  keyboardAppearance?: any;
  returnKeyType?: any;
  returnKeyLabel?: any;
  secureTextEntry?: boolean;
  touched?: boolean;
  error?: any;
  onBlur?: any;
  value?: any;
  type?: string;
  mode?: "date" | "time";
  date?:any; 
  setDate?:any;
  onChangeText?: (text: string) => void; // optional
  togglePasswordVisibility?: () => void;
  ref?: any;
  handleChangeText?: any;
}

const CustomInput: React.ForwardRefRenderFunction<
  RNTextInput,
  CustomInputProps
> = (
  {
    label,
    icon,
    name,
    rules,
    defaultValue,
    options,
    onChangeText,
    PlaceHolder,
    touched,
    error,
    value,
    type,
    date, 
    setDate,
    mode = "date",
    ...inputProps
  },
  ref: ForwardedRef<RNTextInput>
) => {
  const validationColor = !touched ? "#223e4b" : error ? "#FF5A5F" : "#223e4b";

  const [show, setShow] = useState(false);

  const handleChangeText = (text: string) => {
    onChangeText?.(text);
  };
  const onChange = (event:any, selectedDate:any) => {
    setShow(false);
    const currentDate = selectedDate.toLocaleDateString('en-GB');
    onChangeText?.(currentDate);
    console.log("Date: ", currentDate);
  };

  const showDatePicker =()=>{
    setShow(true);
  }
  const togglePasswordVisibility = () => {
    inputProps.setShowPassword((prevState:any) => !prevState);
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 48,
          borderRadius: 8,
          borderColor: validationColor,
          borderWidth: StyleSheet.hairlineWidth,
          padding: 8,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <View style={{ padding: 8 }}>
          <Ionicons name={icon} color={validationColor} size={16} />
        </View>
        <View style={{ flex: 1 }}>
          {type === "text" && (
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(34, 62, 75, 0.7)"
              ref={ref}
              value={value}
              onChangeText={handleChangeText}
              {...inputProps}
            />
          )}
          {type === "date" && (
            <View className="flex flex-row justify-between ">
              <RNTextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="rgba(34, 62, 75, 0.7)"
                ref={ref}
                value={value}
                onChangeText={handleChangeText}
                
                {...inputProps}
              />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  mode={mode}
                  onChange={onChange}
                  value={new Date()}
                  is24Hour={true}
                />
              )}
              <TouchableOpacity onPress={showDatePicker}>
                <Ionicons name="calendar" color={validationColor} size={23} />
              </TouchableOpacity>
            </View>
          )}
          { type === "dropdown" && (
            <View >
              
            </View>
          )}
        </View>
        {inputProps.passwordIcon && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={inputProps.secureTextEntry ? "eye-off" : "eye"}
              color={validationColor}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
      {touched && error && (
        <Text style={{ color: "red", marginLeft: 10 }}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    width: "100%",
  },
  label: {
    fontSize: 14,
    color: "#2D2D2A",
    marginLeft: 10,
    marginTop: 5,
    fontWeight: "500",
  },
  input: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#E7E9E2",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  inputError: {
    borderColor: "red", // Set border color to red for error state
    borderWidth: 1,
  },
  dropdown: {
    backgroundColor: "#E7E9E2",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
});

export default CustomInput;
