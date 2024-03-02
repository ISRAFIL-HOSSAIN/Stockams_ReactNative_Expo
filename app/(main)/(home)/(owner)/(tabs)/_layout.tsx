import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
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
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={18} color={color} />
            ),
            headerRight: () => <></>,
          }}
        />
        <Tabs.Screen
          name="rentals"
          options={{
            tabBarLabel: "Rentals",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="car-rental" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="addspace"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View className="bg-primary relative w-12 h-12 mt-4 flex justify-center items-center rounded-full ">
                <Ionicons
                  name="add-circle-sharp"
                  size={30}
                  color={Colors.black}
                />
              </View>
            ),
            header: () => null,
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            tabBarLabel: "Payment",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" size={18} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={18} color={color} />
            ),
            header: () => null,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
