import { favourite } from "@/assets/images";
import BackHeader from "@/components/global/header/BackHeader";
import CommonLayout from "@/components/layout/CommonLayout";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Favourite = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Function to add an item to the favorites list
  const addToFavorites = (item: string) => {
    setFavorites([...favorites, item]);
  };

  // Function to remove an item from the favorites list
  const removeFromFavorites = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };
  return (
    <View className="mt-10 bg-[#ffffff] w-full h-full">
      <BackHeader Headertext="Back to Profile" />
      <ScrollView>
        <View className="w-[365px] m-[10px] bg-[#ffffff] h-[170px] rounded-2xl shadow-2xl items-center shadow-slate-500">
          <View className="flex flex-col mt-3 ml-2 space-y-2">
            <View className="flex flex-row justify-start space-x-4">
              <Image
                className="w-[63px] h-[63px] rounded-xl"
                source={favourite}
              />
              <View className="flex flex-col  w-[270px]">
                <View className="flex flex-row justify-between w-[265px] items-center space-y-1">
                  <Text className="font-bold text-[16px]">
                    Diamond Field Storage
                  </Text>
                  <Ionicons name="heart" size={25} color="#FF7354" />
                </View>
                <View className="flex flex-row items-center space-x-1 w-[265px]">
                  <Octicons name="location" size={18} color="#757575" />
                  <Text className="text-gray-600 py-1 text-[12px]">
                    {" "}
                    Chodkiewicza Karola 111, Chorzow 41-506
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center w-[340px]">
              <Text className="text-[14px] font-[600]">Access 24/7</Text>
              <View className="flex flex-row items-center ">
                <Text className="text-[18px] font-bold">$74</Text>
                <Text className="text-[12px] font-normal text-gray-600">
                  {" "}
                  /month
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-normal w-[350px] h-auto ">
              <View className="mt-2">
                <View className="h-[22px] flex flex-row w-[40%] absolute left-0">
                  <Image
                    className="w-[22px] h-[22px] rounded-full border-gray-700 border"
                    source={{ uri: "https://via.placeholder.com/22x22" }}
                  />
                  <Image
                    className="w-[22px] h-[22px] rounded-full border-white right-[11px]"
                    source={{ uri: "https://via.placeholder.com/22x22" }}
                  />
                  <Image
                    className="w-[22px] h-[22px] rounded-full border-white right-[22px]"
                    source={{ uri: "https://via.placeholder.com/22x22" }}
                  />
                  <Image
                    className="w-[22px] h-[22px] rounded-full border-white right-[32px]"
                    source={{ uri: "https://via.placeholder.com/22x22" }}
                  />
                </View>
              </View>
              <View className="left-[100px]">
                <View className="w-[100px] h-[37px] px-2 absolute bg-tertiary rounded-xl justify-around flex flex-row items-center">
                  <Ionicons
                    name="person-circle-sharp"
                    size={24}
                    color="black"
                    className="items-center"
                  />
                  <Text className="text-sm font-medium ">Certified</Text>
                </View>
              </View>
              <View className="left-[215px]">
                <View className="w-32 h-[37px] p-2 absolute bg-white rounded-lg justify-between flex flex-row items-center border-gray2 border">
                  <AntDesign name="staro" size={18} color="orange" />
                  <Text className="text-md font-medium">4.8</Text>
                  <Text className="text-[10px] text-gray-400">345 reviews</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default Favourite;
