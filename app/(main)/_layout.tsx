import React, { useEffect } from "react";
import { useAuthUserContext } from "@/context/AuthUserProvider";
import { Redirect, Stack, SplashScreen, router } from "expo-router";
import MainHeader from "@/components/global/header/MainHeader";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { userFound,userLoading, } = useAuthUserContext();

  useEffect(() => {
    if (!userLoading) {
      SplashScreen.hideAsync();
    }
  }, [userLoading]);

  if (!userFound && userLoading) {
    return null;
  }

  if(!userFound && !userLoading)
  {
    <Redirect href="/(main)/(auth)/login" />;
  }

  return (
    <>
      {/* {!loaded && <SplashScreen />} */}
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav() {
  const { userRole } = useAuthUserContext();

  useEffect(()=>{
    if (userRole && userRole === "RENTER") {
      router.replace("/(main)/(home)/(rental)/(tabs)");
    } else if (userRole && userRole === "OWNER") {
      router.replace("/(main)/(home)/(owner)/(tabs)");
    } else {
      router.replace("/(main)/(auth)/login");    
    }
  },[userRole]);

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
