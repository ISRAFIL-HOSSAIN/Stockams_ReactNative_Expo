import React, { forwardRef, ForwardedRef } from "react";
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
interface CustomInputProps {
  passwordIcon?: any;
  icon?: any;
  name?: string;
  label: string;
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
  onChangeText?: (text: string) => void; // optional
  togglePasswordVisibility?: () => void;
  ref?: any;
}

const CustomInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
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
    togglePasswordVisibility,
    ...inputProps
  },
  ref: ForwardedRef<HTMLInputElement>
) => {
  const validationColor = !touched ? "#223e4b" : error ? "#FF5A5F" : "#223e4b";

  const handleChangeText = (text: string) => {
    onChangeText?.(text);
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
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        <View style={{ padding: 8 }}>
          <Icon name={icon} color={validationColor} size={16} />
        </View>
        <View style={{ flex: 1 }}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(34, 62, 75, 0.7)"
            ref={ref}
            value={value}
            onChangeText={handleChangeText}
            {...inputProps}
          />
        </View>
        {inputProps.passwordIcon && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons name={inputProps.secureTextEntry ? "eye-off" : "eye"} color={validationColor} size={20} />
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
