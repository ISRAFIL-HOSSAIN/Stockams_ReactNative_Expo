import React from "react";
import APIQueryClient from "@/api/adminQueryClient";

import AuthUserProvider, {
  useAuthUserContext,
} from "@/context/AuthUserProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "react-native-toast-notifications";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Redirect, SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View, useColorScheme } from "react-native";

import MainHeader from "@/components/global/header/MainHeader";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

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
          {!loaded && <SplashScreen />}
          <RootLayoutNav />
        </ToastProvider>
      </AuthUserProvider>
    </QueryClientProvider>
  );
}

function RootLayoutNav() {
  const { userFound } = useAuthUserContext();
  console.log("UserFound", userFound);

  return (
    <>
      <Stack
        screenOptions={{
          header: () => <MainHeader />,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Login" }} />

        <Stack.Screen name="(tabs)" options={{}} />

        {/* Login Route  */}
        <Stack.Screen
          name="(modals)/login"
          options={{ headerTitle: "" }}
        />

        {/* admin  */}
        {/* create new space  */}
        <Stack.Screen
          name="(admin)/createNewspace"
          options={{ headerTitle: "" }}
        />

        {/* profile  */}
        <Stack.Screen
          name="(modals)/profileInfo"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="(modals)/changePassword"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="(modals)/favouritePage"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="(modals)/managePayment"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="(modals)/termsAndConditions"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="(modals)/privacyPolicy"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="(modals)/spaceOverview"
          options={{ headerTitle: "" }}
        />
        <Stack.Screen name="(modals)/chatPage" options={{ headerTitle: "" }} />
        <Stack.Screen
          name="(modals)/commonModal"
          options={{
            presentation: "transparentModal",
            animation: "slide_from_bottom",
            header: () => null,
          }}
        />

        {/* Loader  */}
        <Stack.Screen
          name="(modals)/commonLoader"
          options={{
            presentation: "modal",
            animation: "slide_from_bottom",
            header: () => null,
          }}
        />
      </Stack>
    </>
  );
}
