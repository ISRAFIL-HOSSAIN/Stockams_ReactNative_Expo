import React, { useEffect } from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Redirect, Stack, SplashScreen, router } from "expo-router";
import MainHeader from "@/components/global/header/MainHeader";

export default function RootLayout() {
  const { userFound,userLoading } = useAuthUserContext();

  useEffect(() => {
    if (!userFound) {
      <Redirect href="/(main)/(auth)/login" />;
    }
  }, [userFound, userLoading]);

  return (
    <>
      {/* {!loaded && <SplashScreen />} */}
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav() {
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
