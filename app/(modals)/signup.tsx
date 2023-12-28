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

import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import CustomInput from "@/components/global/ui/CommonInput";
import { apple, facebook, google, logo, looper } from "@/assets/images";
import { ScrollView } from "react-native-gesture-handler";

interface LoginFormValues {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  return (
    <View className="bg-[#EBFAE6] relative bg-cover bg-center h-full w-full">
      <View className="bg-cover bg-center h-full w-full absolute">
        <Image source={looper} />
      </View>
      <Image className="mt-12 self-center" source={logo} />
      <ScrollView className="bg-white rounded-t-3xl shadow-lg bottom-0 absolute w-full h-[550px]">
        <View className="flex flex-col justify-center">
          <Text className="text-[#ABB0B6] m-3 mt-6">CREATE ACCOUNT WITH</Text>
          <View className="flex flex-row justify-between ml-2 mr-2">
            <View>
              <CustomButton
                bg={Colors.gray2}
                size={178}
                height={40}
                text="Rental"
                onPress={() => Alert.alert("Clicked Rentals")}
                borderWidth={1}
              />
            </View>
            <View>
              <CustomButton
                bg={Colors.akcent}
                size={178}
                height={40}
                text="Space Owner"
                onPress={() => Alert.alert("Clicked Space Owner")}
              />
            </View>
          </View>
          <View>
            <CustomInput label="Full Name" placeholder="Jahirul Islam Jihan" />
          </View>
          <View>
            <CustomInput label="Phone Number" placeholder="01878836939" />
          </View>
          <View>
            <CustomInput label="Date Of Birth" placeholder="1 March 2001" />
          </View>

          <View className="">
            <CustomInput label="Email" placeholder="example@gmail.com" />
          </View>

          <View>
            <CustomInput label="Password" placeholder="Password" />
          </View>
          <View className="self-center mt-4">
            <CustomButton
              bg={Colors.primary}
              size={360}
              text="Login"
              height={45}
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
            <View className="flex flex-row space-x-2 justify-center mb-4 mt-4">
              <Text className="text-[#ABB0B6] text-[13px]">
                Don’t have an account
              </Text>
              <Text className="text-[#2D2D2A] font-medium text-[14px]">
                CREATE ACCOUNT
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignUp;
