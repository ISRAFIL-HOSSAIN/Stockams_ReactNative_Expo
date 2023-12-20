import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { next } from "@/assets/images";

const profile = () => {
  return (
    <View className="flex flex-col px-5  justify-center items-center py-5 space-y-5">
      <Link href={"/(modals)/profileInfo"}>
        <View className="w-[300px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
          <Text>Profile Information</Text>
          <Image
            className="w-[22px] h-[22px] ml-2"
            source={next}
          />
        </View>
      </Link>
      <Link href={"/(modals)/changePassword"}>
        <View className="w-[300px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
          <Text>Change Password</Text>
          <Image
            className="w-[22px] h-[22px] ml-2"
            source={next}
          />
        </View>
      </Link>
      <Link href={"/(modals)/managePayment"}>
        <View className="w-[300px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
          <Text>Make Payment</Text>
          <Image
            className="w-[22px] h-[22px] ml-2"
            source={next}
          />
        </View>
      </Link>
    </View>
  );
};

export default profile;
