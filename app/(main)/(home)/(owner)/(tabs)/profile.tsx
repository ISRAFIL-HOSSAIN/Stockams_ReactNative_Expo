import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { next } from "@/assets/images";

import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { removeTokens } from "@/utils/localStorageUtils";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

const profile = () => {
  const handleUserLogout = async () => {
    console.log("Logout");
    await removeTokens();
    router.replace("/(main)/(auth)/login");
  };
  return (
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
      <TouchableOpacity onPress={() => handleUserLogout()} className="mb-5 px-5">
        <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
          <Text className="text-[16px] font-medium">LogOut</Text>
          <AntDesign name="logout" size={20} color={Colors.primary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default profile;
