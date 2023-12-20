import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import RentalsHeader from "@/components/admin/header/RentalsHeader";
import StoreCard from "@/components/global/Card";
import EditStoreCard from "@/components/admin/components/EditStoreCard";
import BookedCard from "@/components/admin/components/BookedCard";
import { CommonLoader } from "@/components/global/progress";

const Page = () => {
  const [tab, setTab] = useState("all");
  return (
    <View style={{}}>
      <Stack.Screen
        options={{
          header: () => <RentalsHeader tab={tab} setTab={setTab} />,
        }}
      />

      {/* <Listings /> */}
      {/* <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
      <Link href={'/listing/120'}>Listing details</Link> */}
      <CommonLoader />
      <ScrollView className="">
        <View style={styles.container}>
          <View className="justify-center items-center  ">
            {
              (tab === "all") && <EditStoreCard />
            }
            {
              (tab === "booked") && <BookedCard />
            }
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
