import React, { useEffect } from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Redirect, Stack, SplashScreen, router } from "expo-router";
import MainHeader from "@/components/global/header/MainHeader";
import CommonProgress from "./(home)/(modals)/commonLoader";

// SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const { userFound, userLoading,userRole } = useAuthUserContext();

  if (userLoading) {
    return <CommonProgress />;
  }


  if (!userFound && !userLoading) {
    router.replace("/(main)/(auth)/login")
  }
  useEffect(() => {
    if (userRole === "RENTER") {
      router.replace("/(main)/(home)/(rental)/(tabs)");
    } else if (userRole === "OWNER") {
      router.replace("/(main)/(home)/(owner)/(tabs)");
    } else {
      router.replace("/(main)/(auth)/login");
    }
  }, [userRole]);
  
  if (!userFound && userLoading) {
    return null;
  }

  return (
    <>
      <AppLayoutNav />
    </>
  );
}

function AppLayoutNav() {
  return (
    <>
      <Stack
        screenOptions={{
          header: () => <MainHeader />,
        }}
        initialRouteName="(home)"
      >
        <Stack.Screen name="(home)" options={{}} />
        <Stack.Screen name="(auth)/login" options={{}} />
        <Stack.Screen name="(auth)/signup" options={{}} />
      </Stack>
    </>
  );
}
