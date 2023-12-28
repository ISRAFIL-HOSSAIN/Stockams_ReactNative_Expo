import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { next } from "@/assets/images";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const profile = () => {
  return (
    <ScrollView>
      <View className="flex flex-col px-5  justify-center items-center py-5 space-y-5">
        <View className="text-xl mb-3">
          <CustomButton
            bg={Colors.primary}
            size={330}
            height={50}
            text="Shitch to Host View"
            onPress={() => Alert.alert("Button clicked")}
          />
        </View>
        <Link href={"/(modals)/profileInfo"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Profile Information</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
        <Link href={"/(modals)/changePassword"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Change Password</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
        <Link href={"/(modals)/favouritePage"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Favourite</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
        <Link href={"/(modals)/managePayment"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Manage Payment</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
        <Link href={"/(modals)/termsAndConditions"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Terms And Condition</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
        <Link href={"/(modals)/privacyPolicy"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Privacy Policy</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>

        <Link href={"/"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">LogOut</Text>
            <AntDesign name="logout" size={20} color={Colors.primary} />
          </View>
        </Link>
        <Link href={"/(modals)/login"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Login</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
        <Link href={"/(modals)/signup"}>
          <View className="w-[330px] bg-white shadow-md shadow-black rounded-xl px-5 py-4 flex flex-row justify-between">
            <Text className="text-[16px] font-medium">Sign Up</Text>
            <Image className="w-[22px] h-[22px] ml-2" source={next} />
          </View>
        </Link>
      </View>
    </ScrollView>
  );
};

export default profile;
