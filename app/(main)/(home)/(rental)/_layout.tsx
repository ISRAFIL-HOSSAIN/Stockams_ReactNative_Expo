import React from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Redirect, Stack, SplashScreen } from "expo-router";


export default function RentalLayout() {
  const { userLoading, userFound } = useAuthUserContext();

  return (
    <>
      <RentalLayoutNav />
    </>
  );
}

function RentalLayoutNav() {
  return (
    <>
      <Stack
          screenOptions={{
            header: () => null,
          }}
          initialRouteName="(tabs)"
        >
        <Stack.Screen name="(tabs)" options={{}} />
      </Stack>
    </>
  );
}
