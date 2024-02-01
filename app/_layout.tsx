import React from "react";
import APIQueryClient from "@/api/adminQueryClient";


import { QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "react-native-toast-notifications";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import {  Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";
import AuthUserProvider from "@/context/AuthUserProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(auth)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const fetchData = async () => {
      if (loaded) {
        // Assuming SplashScreen.hideAsync() returns a Promise
        await SplashScreen.hideAsync();
        // Any additional code you want to run after hiding the SplashScreen
      }
    };
  
    fetchData();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={APIQueryClient}>
      <AuthUserProvider>
        <ToastProvider
          renderType={{
            custom_type: (toast) => (
              <View style={{ padding: 15, backgroundColor: "grey" }}>
                <Text>{toast.message}</Text>
              </View>
            ),
          }}
        >
          {!loaded && <SplashScreen />}
          <Slot />
        </ToastProvider>
      </AuthUserProvider>
    </QueryClientProvider>
  );
}
