import React, { useEffect } from "react";
import APIQueryClient from "@/api/adminQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "react-native-toast-notifications";
import { Redirect, Slot, SplashScreen, router } from "expo-router";
import { Text, View } from "react-native";

import AuthUserProvider, {
  useAuthUserContext,
} from "@/context/AuthUserProvider";
import { useFonts } from "expo-font";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
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
          <RootLayoutNav />
        </ToastProvider>
      </AuthUserProvider>
    </QueryClientProvider>
  );
}

function RootLayoutNav() {
  const { userFound,userLoading } = useAuthUserContext();
  useEffect(() => {
    if (!userFound && !userLoading) {
      return router.replace("/(main)/(auth)/login")
    }
  }, [userFound, userLoading]);

  return <Slot />;
}
