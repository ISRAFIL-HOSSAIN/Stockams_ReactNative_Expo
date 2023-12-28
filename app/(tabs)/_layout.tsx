import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
          fontSize: 9,
          height: 19, 
          backgroundColor: "white",
          alignContent:"center",
          justifyContent:"center",
        },
      }}
      
      sceneContainerStyle={{
        marginTop:40,
        backgroundColor:"#ffffff"
    
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={18} color={color} />
          ),
          headerRight: () => (
            <>
              {/* <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="user"
                      size={25}
                      color={Colors.primary}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link> */}
              {/* <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="user"
                      size={25}
                      color={Colors.primary}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link> */}
            </>
          ),
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
            <Ionicons name="add-circle-sharp" size={60} color={Colors.primary} 
              style={{position: "absolute",bottom:0}}
            />
          ),
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
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
