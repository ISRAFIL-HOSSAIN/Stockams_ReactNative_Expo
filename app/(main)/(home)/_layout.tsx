import React, { useEffect } from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Redirect, Stack, router } from "expo-router";
import MainHeader from "@/components/global/header/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function PageLayout() {
  const { userLoading, userFound, userData, userRole } = useAuthUserContext();

  // if (userLoading) {
  //   return <CommonProgress />;
  // }

  // console.log({userData})
  // console.log({userFound})
  // useEffect(()=>{
  //   if(userFound && userData ) {
  //     if(userData?.role === "RENTER"){
  //       router.replace("/(main)/(app)/(rental)/(tabs)")
  //     }
  //     else if(userData?.role === "OWNER"){
  //       router.replace("/(main)/(app)/(owner)/(tabs)")
  //     }
  //     else {
  //       router.replace("/(main)/(auth)/login")
  //     }
  //   }
  //   else {
  //     router.replace("/(main)/(auth)/login")
  //   }
  // },[userFound,userLoading,userData]);

  return (
    <>
      {/* {!loaded && <SplashScreen />} */}
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            header: () => null,
          }}
          initialRouteName={
            userRole && userRole === "RENTER" ? "(rental)" : "(owner)"
          }
        >
          <Stack.Screen name="(rental)" options={{}} />
          <Stack.Screen name="(owner)" options={{}} />

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
          <Stack.Screen
            name="(modals)/chatPage"
            options={{ headerTitle: "" }}
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
