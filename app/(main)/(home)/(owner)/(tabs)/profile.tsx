import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";
import { next } from "@/assets/images";

import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { removeTokens } from "@/utils/localStorageUtils";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useToast } from "react-native-toast-notifications";

const profile = () => {
  const toast = useToast();
  const handleUserLogout = async () => {
    await removeTokens();
    toast.show("Logout Successfully ! 👋", { type: "success" });
    router.replace("/(main)/(auth)/login");
  };
  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <View className="flex flex-row px-4 h-28 bg-slate-100  py-3 rounded-xl  justify-between items-center">
              <Text className="text-[20px] font-bold ">Profile</Text>
              <TouchableOpacity
                onPress={() => handleUserLogout()}
                className="mb-5 px-5"
              >
                <AntDesign name="logout" size={30} color={Colors.black} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View className="h-full flex flex-col justify-between ">
        <View className="flex flex-col px-5  justify-center items-center py-5 space-y-5">
          <Link href={"/(main)/(home)/(modals)/profileInfo"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">
                Personal Information
              </Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
          <Link href={"/(main)/(home)/(modals)/changePassword"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">Change Password</Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>

          <Link href={"/(main)/(home)/(modals)/managePayment"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">Manage Payment</Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
        </View>
      </View>
    </>
  );
};

export default profile;
