import React from "react";

import {
  useAuthUserContext,
} from "@/context/AuthUserProvider";

import { Redirect, Stack } from "expo-router";
import MainHeader from "@/components/global/header/MainHeader";
import CommonProgress from "./(modals)/commonLoader";

export default function AppLayout() {
  const { userFound, userLoading } = useAuthUserContext();

  if (userLoading) {
    return <CommonProgress />;
  }

  if (!userFound) {
    return <Redirect href="/(app)/(auth)/login" />;
  }
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <Stack
        screenOptions={{
          header: () => <MainHeader />,
        }}
      >
        {/* <Stack.Screen name="index" options={{ title: "Login" }} /> */}

        <Stack.Screen name="(tabs)" options={{}} />

        {/* Login Route  */}
        <Stack.Screen name="(auth)/login" options={{ headerTitle: "" }} />
        <Stack.Screen name="(auth)/signup" options={{ headerTitle: "" }} />

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
