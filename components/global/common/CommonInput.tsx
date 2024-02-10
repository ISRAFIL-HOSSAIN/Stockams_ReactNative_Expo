// TextInput, Datepicker, email, password. ...

import React, { ForwardedRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import convertNumber from "@/utils/commonFunction";
import Checkbox from "expo-checkbox";

interface CustomInputProps {
  passwordIcon?: any;
  setShowPassword?: any;
  icon?: any;
  name?: string;
  label?: string;
  defaultValue?: string | boolean;
  options?: any; // optional for select/dropdown
  rules?: any;
  placeholder: string;
  autoCapitalize?: any;
  autoCompleteType?: any;
  keyboardType?: string;
  keyboardAppearance?: any;
  returnKeyType?: any;
  returnKeyLabel?: any;
  secureTextEntry?: boolean;
  touched?: any;
  error?: any;
  onBlur?: any;
  value?: any;
  type?: string;
  mode?: "date" | "time";
  date?: any;
  setDate?: any;
  rightIcon?: any;
  rightText?: any;
  height?: number;
  setFieldValue?: any;
  values?: any;
  width?: any;
  isDropdownChangeAnotherField?: any;
  isEditable? : any;
  border? : any;
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
    placeholder,
    touched,
    error,
    value,
    type,
    date,
    setDate,
    isEditable,
    mode = "date",
    height = 48,
    keyboardType,
    setFieldValue,
    width = "100%",
    values,
    isDropdownChangeAnotherField = false,
    border,
    ...inputProps
  },
  ref: ForwardedRef<RNTextInput>
) => {
  const validationColor = !touched ? "#223e4b" : error ? "#FF5A5F" : "#223e4b";

  const [show, setShow] = useState(false);

  const handleChangeText = (text: string) => {
    onChangeText?.(text);
  };
  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    const currentDate = selectedDate.toLocaleDateString("en-GB");
    onChangeText?.(currentDate);
  };

  const handleChangeDropdown = (itemValue: string) => {
    if (isDropdownChangeAnotherField) {
      const selectedOption = options?.find(
        (item: any) => item?.name === itemValue
      );
      if (selectedOption) {
        setFieldValue(
          "pricePerMonth",
          convertNumber(selectedOption?.pricePerMonth)
        );
      }
    }
    onChangeText?.(itemValue);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  const togglePasswordVisibility = () => {
    inputProps.setShowPassword((prevState: any) => !prevState);
  };

  return (
    <View
      style={{
        padding: 4,
        width: width,
      }}
    >
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height,
          borderRadius: 8,
          borderColor: validationColor,
          borderWidth: border ? border : StyleSheet.hairlineWidth,
          padding: 8,
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: Colors.gray2,
        }}
      >
        <View style={{ padding: 8 }}>
          {type === "dropdown" ? (
            <MaterialCommunityIcons
              name={icon}
              color={validationColor}
              size={16}
            />
          ) : (
            <Ionicons name={icon} color={validationColor} size={16} />
          )}
        </View>
        <View style={{ flex: 1 }}>
          {type === "text" && (
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(34, 62, 75, 0.7)"
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChangeText={handleChangeText}
              editable={isEditable}
              {...inputProps}
            />
          )}
          {type === "number" && (
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(34, 62, 75, 0.7)"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChangeText={handleChangeText}
              keyboardType="numeric"
            />
          )}
          {type === "richtext" && (
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(34, 62, 75, 0.7)"
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChangeText={handleChangeText}
              multiline={true}
              numberOfLines={10}
              style={{ height: 50, textAlignVertical: "top" }}
              {...inputProps}
            />
          )}
          {type === "number" && (
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(34, 62, 75, 0.7)"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChangeText={handleChangeText}
              keyboardType="numeric"
            />
          )}
          {type === "richtext" && (
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(34, 62, 75, 0.7)"
              placeholder={placeholder}
              ref={ref}
              value={value}
              onChangeText={handleChangeText}
              multiline={true}
              numberOfLines={10}
              style={{ height: 50, textAlignVertical: "top" }}
              {...inputProps}
            />
          )}
          {type === "date" && (
            <View className="flex flex-row justify-between ">
              <RNTextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="rgba(34, 62, 75, 0.7)"
                placeholder={placeholder}
                ref={ref}
                value={value}
                onChangeText={handleChangeText}
                editable={isEditable}
                {...inputProps}
              />
              {show &&(
                <DateTimePicker
                  testID="dateTimePicker"
                  mode={mode}
                  onChange={onChange}
                  value={new Date()}
                  is24Hour={true}
                />
              )}
              <TouchableOpacity disabled={!isEditable} onPress={showDatePicker}>
                <Ionicons name="calendar" color={validationColor} size={23} />
              </TouchableOpacity>
            </View>
          )}
          {type === "dropdown" && (
            <Picker
              selectedValue={value}
              onValueChange={handleChangeDropdown}
              style={{ height: 50, width: "100%" }}
              className="text-md font-medium"
            >
              <Picker.Item label={placeholder} value={values} />
              {options?.map((item: any, index: any) => (
                <Picker.Item
                  key={index}
                  label={item?.name || item?.label}
                  value={item?.name || item?.value}
                />
              ))}
            </Picker>
          )}
          {type === "checkbox" && (
            <View>
              <Checkbox />
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

        <View className="flex flex-row space-x-1">
          {inputProps.rightIcon && (
            <Ionicons
              name={inputProps?.rightIcon}
              color={validationColor}
              size={20}
            />
          )}
          {inputProps.rightText && <Text>{inputProps.rightText}</Text>}
        </View>
      </View>
      {touched && error && (
        <Text style={{ color: "red", marginLeft: 10 }}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
