// CustomButton.tsx
import Colors from '@/constants/Colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  bg?: string;
  size: number;
  text: string;
  height?:number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ bg, size,height, text, onPress, ...otherProps }) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor: bg,
    width: size,
    height: height ? height : 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...otherProps}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CustomButton;
