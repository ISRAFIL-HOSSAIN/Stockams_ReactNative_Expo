import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { Component } from "react";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const massagePage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  return (
    <View className="w-full h-full bg-white">
      <View className="flex flex-row justify-start items-center mt-[60px] self-center rounded-xl bg-[#ffffff] w-[360px] h-[50px] shadow-xl shadow-slate-500">
        <TouchableOpacity
          className="ml-2 "
          onPress={() => router.push("/chatPage")}
        >
          <Ionicons
            name="ios-arrow-back-circle-outline"
            size={30}
            color="#ABB0B6"
          />
        </TouchableOpacity>
        <View className="flex flex-row justify-start space-x-2 items-center left-[90px]">
          <Image
            className="h-[32px] w-[32px] rounded-3xl"
            source={{ uri: params.image }}
          />
          <Text className="font-medium text-[14px]">{params.name}</Text>
        </View>
      </View>
      <ScrollView>
        <View>
            
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default massagePage;
