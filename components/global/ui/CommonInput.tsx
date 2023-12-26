import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  // CheckBox, 
  // Picker 

} from 'react-native';



interface CustomInputProps {
  type: 'text' | 'email' | 'password' | 'checkbox' | 'dropdown';
  label: string;
  options?: string[]; // optional for select/dropdown
  checked?: boolean; // optional for checkbox
  selectedOption?: string; // optional for dropdown
  PlaceHolder:string;
  onChangeText?: (text: string) => void; // optional
  onValueChange?: (value: string) => void; // optional
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  options,
  checked,
  selectedOption,
  onChangeText,
  onValueChange,
  PlaceHolder,
  
}) => {
  const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  const handleOptionChange = (value: string) => {
    setValue(value);
    onValueChange?.(value);
  };

  switch (type) {
    case 'text':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChange}
            placeholder={PlaceHolder}
          />
        </View>
      );
    case 'email':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChange}
            keyboardType="email-address"
            placeholder={PlaceHolder}
          />
        </View>
      );
    case 'password':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChange}
            secureTextEntry
            placeholder={PlaceHolder}
          />
        </View>
      );
    // case 'checkbox':
    //   return (
    //     <View>
    //       <Text style={styles.label}>{label}</Text>
    //       <CheckBox
    //         style={styles.checkbox}
    //         value={checked}
    //         onValueChange={onValueChange}
              //  placeholder={PlaceHolder}
    //       />
    //     </View>
    //   );
    case 'dropdown':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <Picker
            selectedValue={selectedOption}
            onValueChange={handleOptionChange}
            style={styles.dropdown}
          >
            {options &&
              options.map((option) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
          </Picker>
        </View>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    padding:5,
    width:"100%",

  },
  label: {
    fontSize: 14,
    color: '#2D2D2A',
    marginLeft:10,
    marginTop:10,
    fontWeight:'500'
  },
  input: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#E7E9E2',
    marginLeft:10,
    marginRight:10,
    marginTop:5,

  },
  textInputInput: {
    // Custom styles for text/email input
  },
  passwordInput: {
    // Custom styles for password input
  },
  checkbox: {
    marginLeft: 10,
  },
  dropdown: {
    backgroundColor: '#E7E9E2',
    borderRadius: 20,
    marginLeft:10,
    marginRight:10,
    marginTop:5,

  },
});

export default CustomInput;
