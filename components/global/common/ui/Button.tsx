// CustomButton.tsx
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
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
  ActivityIndicator,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  bg?: string;
  size: number;
  text: string;
  height?: number;
  borderWidth?: number;
  icon?: any;
  showIcon?: boolean;
  padding?: number;
  diasbled?: boolean;
  rightIcon?: boolean;
  type?: string;
  isLoading?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bg,
  size,
  height,
  borderWidth,
  text,
  onPress,
  icon,
  showIcon = false,
  padding,
  disabled = false,
  rightIcon = false,
  type = "icon",
  isLoading,
  ...otherProps
}) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor: disabled ? Colors?.gray2 : bg,
    width: size,
    height: height ? height : 40,
    borderRadius: 10,
    borderWidth: borderWidth ? borderWidth : 1,
    borderColor: Colors.primary,
    padding: padding ? padding : 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onPress={onPress}
      {...otherProps}
    >
      {isLoading && (
        <View className={`flex flex-row justify-center  w-full items-center `}>
          <ActivityIndicator size="small" color="#3C09BC" />
        </View>
      )}
      {!isLoading && (
        <View
          className={`flex flex-row justify-around  w-full ${
            (showIcon || rightIcon) && "px-4 space-x-3"
          }  items-center `}
        >
          {showIcon && (
            <>
              {type === "image" ? (
                <View className="bg-white rounded-xl p-2">
                  <Image
                    source={icon}
                    style={{
                      width: 17,
                      height: 14,
                      flex: 1,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              ) : (
                <Ionicons name={icon} size={22} color="black" />
              )}
            </>
          )}

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {text}
          </Text>

          {rightIcon && (
            <>
              {type === "image" ? (
                <View className="bg-white rounded-xl p-2">
                  <Image
                    source={icon}
                    style={{
                      width: 17,
                      height: 14,
                      flex: 1,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              ) : (
                <Ionicons name={icon} size={22} color="black" />
              )}
            </>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
