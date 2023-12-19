import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/admin/header/ExploreHeader";
import StoreCard from "@/components/global/Card";
import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  return (
    <View style={{}}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />

      {/* <Listings /> */}
      {/* <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
      <Link href={'/listing/120'}>Listing details</Link> */}
      
      <ScrollView className="">
        <View style={styles.container}>
          <View className=" shadow-lg shadow-gray-600  rounded-xl w-full bg-white flex justify-center flex-col p-4">
            <Text className="text-xl font-bold p-2">Rent Request</Text>

            <View className="justify-center items-center  ">
              <StoreCard />
              <StoreCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.97,
    //height:Dimensions.get('window').height,
    margin: 4,
    marginBottom: 20,
  },
});

export default Page;
