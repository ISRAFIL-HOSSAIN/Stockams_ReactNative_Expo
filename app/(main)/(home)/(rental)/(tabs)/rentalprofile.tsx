import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";
import { next } from "@/assets/images";

import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "@/components/global/common/ui/Button";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { removeTokens } from "@/utils/localStorageUtils";

const profile = () => {
  const handleUserLogout = async () => {
    console.log("Logout");
    await removeTokens();
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
      <ScrollView>
        <View className="flex flex-col px-5  justify-center items-center py-5 space-y-5">
          <Link href={"/(main)/(home)/(modals)/profileInfo"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">
                Profile Information
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
          <Link href={"/(main)/(home)/(modals)/favouritePage"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">Favourite</Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
          <Link href={"/(main)/(home)/(modals)/managePayment"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">Manage Payment</Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
          <Link href={"/(main)/(home)/(modals)/termsAndConditions"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">
                Terms And Condition
              </Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
          <Link href={"/(main)/(home)/(modals)/privacyPolicy"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">Privacy Policy</Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
          <Link href={"/(main)/(home)/(modals)/spaceOverview"}>
            <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
              <Text className="text-[16px] font-medium">Space Overview</Text>
              <Image className="w-[22px] h-[22px] ml-2" source={next} />
            </View>
          </Link>
        </View>
      </ScrollView>
    </>
  );
};

export default profile;
