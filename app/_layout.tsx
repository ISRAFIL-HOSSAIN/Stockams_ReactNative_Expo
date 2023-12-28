import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import MainHeader from "@/components/global/header/MainHeader";
import AuthUserProvider from "@/context/AuthUserProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import APIQueryClient from "@/api/APIQueryClient";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

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

  // return (
  //   <ClerkProvider
  //     publishableKey={CLERK_PUBLISHABLE_KEY!}
  //     tokenCache={tokenCache}
  //   >
  //     <RootLayoutNav />
  //   </ClerkProvider>
  // );

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  // const { isLoaded, isSignedIn } = useAuth();

  return (
    <QueryClientProvider client={APIQueryClient}>
      <AuthUserProvider>
        <Stack
          screenOptions={{
            header: () => <MainHeader />,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Login" }} />

          <Stack.Screen name="(tabs)" options={{}} />

          {/* models  */}
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />

          {/* Login Route  */}
          <Stack.Screen
            name="(modals)/login"
            options={{
              presentation: "modal",
              title: "Log in or Signup",
              headerTitleStyle: {
                fontFamily: "mon-sb",
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            }}
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
          <Stack.Screen name="(modals)/logIn" options={{ headerTitle: "" }} />
          <Stack.Screen name="(modals)/signUp" options={{ headerTitle: "" }} />

          <Stack.Screen name="listing/[id]" options={{ headerTitle: "" }} />
          <Stack.Screen
            name="(modals)/booking"
            options={{
              presentation: "transparentModal",
              animation: "fade",
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </AuthUserProvider>
    </QueryClientProvider>
  );
}
