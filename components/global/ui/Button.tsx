// CustomButton.tsx
import Colors from "@/constants/Colors";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  View,
  Image,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  bg?: string;
  size: number;
  text: string;
  height?: number;
  borderWidth?: number;
  icon?: any;
  showIcon?: boolean;
  padding?:number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bg,
  size,
  height,
  borderWidth,
  text,
  onPress,
  icon,
  showIcon,
  padding,
  ...otherProps
}) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor: bg,
    width: size,
    height: height ? height : 40,
    borderRadius: 10,
    borderWidth: borderWidth ? borderWidth : 1,
    borderColor: Colors.primary,
    padding: padding? padding :5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...otherProps}>
      {showIcon ? (
        <View className={`flex flex-row  w-full space-x-3  items-center `}>
          {showIcon && (
            <View className="bg-white rounded-xl p-2">
              <Image source={icon} style={{ width: 17, height: 14,flex:1, resizeMode:"cover"}} />
            </View>
          )}

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {text}
          </Text>
        </View>
      ) : (
        <Text style={styles.textStyle}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default CustomButton;
