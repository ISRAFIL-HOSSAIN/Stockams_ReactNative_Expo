import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View className="space-y-4">
      {/* <Listings /> */}
      <Link
        className="flex items-center rounded-[16px] bg-white text-black p-[16px] m-2 shadow-md shadow-black font-medium text-base"
        href={"/(modals)/profileInfo"}
      >
        Profile information
        <Image
          className="w-[22px] h-[22px] ml-2"
          source={require("../../assets/images/next_arrow.png")}
        />
      </Link>
      <Link
        className="rounded-[16px] bg-white text-black p-[16px] m-2 shadow-md shadow-black font-medium text-base"
        href={"/(modals)/changePassword"}
      >
        Change Password
        <Image
          className="w-[22px] h-[22px]"
          source={require("../../assets/images/next_arrow.png")}
        />
      </Link>
      <Link
        className="rounded-[16px] bg-white text-black p-[16px] m-2 shadow-md shadow-black font-medium text-base"
        href={"/(modals)/managePayment"}
      >
        Manage Payment
        <Image
          className="w-[22px] h-[22px]"
          source={require("../../assets/images/next_arrow.png")}
        />
      </Link>
    </View>
  );
};

export default profile;
