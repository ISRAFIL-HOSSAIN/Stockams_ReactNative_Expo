import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useAuthUserContext } from "@/context/AuthUserProvider";

const TabsLayout = () => {
  const { userFound, userLoading, userData } = useAuthUserContext();
  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: { height: 65 },

          tabBarLabelStyle: {
            fontFamily: "mon-sb",
            fontSize: 8,
            height: 24,
            backgroundColor: "white",
            alignContent: "center",
            justifyContent: "space-around",
           
          },
        }}
        sceneContainerStyle={{
          marginTop: 0,
          backgroundColor: "#ffffff",
        }}
      >
      
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Near me",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="my-location" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="message" size={24} color={color} />
            ),
            header: () => null,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View className="bg-primary relative w-12 h-12 mt-4 flex justify-center items-center rounded-full ">
                <Ionicons
                  name="search"
                  size={30}
                  color={Colors.black}
                  
                />
              </View>
            ),
            header : ()=> null,
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            tabBarLabel: "Booking",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-multiple-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="rentalprofile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={18} color={color} />
            ),
            header : ()=> null,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
