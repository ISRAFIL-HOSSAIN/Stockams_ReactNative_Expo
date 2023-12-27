import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import CustomInput from "@/components/global/ui/CommonInput";
import { apple, facebook, google, logo, looper } from "@/assets/images";
import { ScrollView } from "react-native-gesture-handler";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    // Perform login logic here (e.g., send a request to your backend)
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login or display error messages
    }, 2000); // Simulate a network request
  };

  return (
    <View className="bg-[#EBFAE6] relative bg-cover bg-center h-full w-full">
      <View className="bg-cover bg-center h-full w-full absolute">
        <Image source={looper} />
      </View>
      <Image className="mt-12 self-center" source={logo} />
      <ScrollView className="bg-white rounded-t-3xl shadow-lg bottom-0 absolute w-full h-[550px]">
        <View className="flex flex-col justify-center">
          <Text className="text-[#ABB0B6] m-3 mt-6">LOGIN WITH</Text>
          <View className="">
            <CustomInput
              type="email"
              label="Email"
              PlaceHolder="example@gmail.com"
            />
            {errors.email && (
              <Text>{errors.email.message || "Email is required"}</Text>
            )}
          </View>

          <View>
            <CustomInput type="password" label="Password" PlaceHolder="Password" />
            {errors.password && (
              <Text>{errors.password.message || "Password is required"}</Text>
            )}
          </View>
          <View className="self-center mt-4">
            <CustomButton
              bg={Colors.primary}
              size={360}
              text="Login"
              height={45}
              onPress={handleSubmit(onSubmit)}
            />
            <Text className="text-[#ABB0B6] font-semibold self-center mt-6">
              Forgot Password?
            </Text>
            <Text className="text-[#ABB0B6]  mt-7">OR CONTINUE WITH</Text>
            <View className="flex flex-row items-center ml-6">
              <Image source={google} />
              <Image source={facebook} />
              <Image source={apple} />
            </View>
            <View className="flex flex-row space-x-2 justify-center">
              <Text className="text-[#ABB0B6] text-[13px]">Don’t have an account</Text>
              <Text className="text-[#2D2D2A] font-medium text-[14px]">CREATE ACCOUNT</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
