import React from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Stack} from "expo-router";
export default function OwnerLayout() {

  return (
    <>
      <OwnerLayoutNav />
    </>
  );
}

function OwnerLayoutNav() {
  return (
    <>
      <Stack
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="(tabs)"
      >
        <Stack.Screen name="(tabs)" options={{}} />
        <Stack.Screen name="createNewspace" options={{ headerTitle: "" }} />
      </Stack>
    </>
  );
}
