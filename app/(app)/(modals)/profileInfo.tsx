import { StyleSheet, Text, View, Image, BackHandler, Alert } from "react-native";
import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import { ScrollView } from "react-native-gesture-handler";
import BackHeader from "@/components/global/header/BackHeader";
import { Stack } from "expo-router";
import CustomInput from "@/components/global/common/CommonInput";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <CommonLayout>
      <BackHeader Headertext="Back to" />
      <View className="flex-col h-[550px] m-3 shadow-lg shadow-gray-400 bg-white rounded-xl ">
        <View className="p-3 mt-1 ml-2 mb-2">
          <Text className=" text-[18px] font-medium">Personal Information</Text>
        </View>
        <View className="items-center">
          <View className="w-[92%] h-44 items-center justify-center bg-white rounded-3xl shadow">
            <Image
              className="w-full h-full  absolute rounded-3xl"
              source={require("../../../assets/images/profile.png")}
            />
            <Image
              className="w-[35px] h-[35px]"
              source={require("../../../assets/images/profile_edit.png")}
            />
          </View>
        </View>
        <View>
        <CustomInput  label="Name" placeholder="Israfil Hossain"/>
        <CustomInput  label="Email" placeholder="example@gmail.com"/>
        <CustomInput  label="Address" placeholder="USA"/>
        </View>
        <View className="flex flex-row justify-between py-2 mx-3 my-4 ">
          <CustomButton  text="Reject" size={140} bg={Colors.white} onPress={() => Alert.alert('Reject')}/>
          <CustomButton bg={Colors.primary} size={140} text="Save Changes" onPress={()=> Alert.alert('Button clicked')}/>
        </View>
      </View>
    </CommonLayout>
  );
};

export default Page;

const styles = StyleSheet.create({});
