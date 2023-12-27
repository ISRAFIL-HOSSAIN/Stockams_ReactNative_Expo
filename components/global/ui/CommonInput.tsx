import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useController, useFormContext, FieldValues } from "react-hook-form";
import * as yup from "yup";

interface CustomInputProps {
  type: "text" | "email" | "password" | "checkbox" | "dropdown";
  name: string;
  label: string;
  defaultValue?: string | boolean;
  options?: string[]; // optional for select/dropdown
  PlaceHolder: string;
  rules: any;
  onChangeText?: (text: string) => void; // optional
  onValueChange?: (value: string) => void; // optional
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  name,
  rules,
  defaultValue,
  options,
  onChangeText,
  onValueChange,
  PlaceHolder,
  ...inputProps
}) => {
  const formContext = useFormContext();
  const { control } = formContext;
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: defaultValue || "",
    rules: rules,
  });

  const handleChange = (text: string) => {
    field.onChange(text);
    onChangeText?.(text);
  };

  const handleOptionChange = (value: string) => {
    field.onChange(value);
    onValueChange?.(value);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      {type === "text" && (
        <TextInput
          style={[
            styles.input,
            fieldState?.error ? styles.inputError : null, // Apply error style if there is an error
          ]}
          onChangeText={handleChange}
          placeholder={PlaceHolder}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />
      )}
      {type === "dropdown" && (
        <Picker
          selectedValue={field.value}
          onValueChange={handleOptionChange}
          style={[
            styles.dropdown,
            fieldState?.error ? styles.inputError : null, // Apply error style if there is an error
          ]}
        >
          {options &&
            options.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
        </Picker>
      )}
      {fieldState?.error && (
        <Text style={{ color: "red", marginLeft: 10 }}>
          {fieldState?.error.message}
        </Text>
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
    marginTop: 10,
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
