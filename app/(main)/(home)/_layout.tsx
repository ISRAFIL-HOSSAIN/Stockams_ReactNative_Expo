import React, { useEffect } from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Redirect, Stack, router } from "expo-router";
import MainHeader from "@/components/global/header/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CommonProgress from "./(modals)/commonLoader";

export default function PageLayout() {
  const { userRole } = useAuthUserContext();
  return (
    <>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            header: () => null,
          }}
          initialRouteName={userRole === "RENTER" ? "(rental)" : "(owner)"}
        >
          <Stack.Screen name="(rental)" options={{}} />
          <Stack.Screen name="(owner)" options={{}} />

          {/* modals  */}

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

          {/* Message route  */}
          <Stack.Screen
            name="(modals)/massagePage"
            options={{ headerTitle: "" }}
          />

          <Stack.Screen
            name="(modals)/PopUpModal"
            options={{
              presentation:"modal",
              animation: "slide_from_bottom",
              header: () => null,
            }}
          />

          <Stack.Screen
            name="(modals)/commonModal"
            options={{
              presentation: "transparentModal",
              animation: "slide_from_bottom",
              header: () => null,
            }}
          />
          <Stack.Screen
            name="(modals)/commonLoader"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              header: () => null,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </>
  );
}
