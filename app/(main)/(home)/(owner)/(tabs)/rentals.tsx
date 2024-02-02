import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Link, Stack } from "expo-router";
import RentalsHeader from "@/components/admin/header/RentalsHeader";
import StoreCard from "@/components/global/Card";
import EditStoreCard from "@/components/admin/components/EditStoreCard";
import BookedCard from "@/components/admin/components/BookedCard";

import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const Page = () => {
  const [tab, setTab] = useState("all");
  const addnewSpace = () => {
    router.push("/createNewspace");
  };
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
      {/* <CommonLoader /> */}
      <ScrollView className="">
        <View style={styles.container}>
          <View className="justify-center items-center  ">
            {tab === "all" && <EditStoreCard />}
            {tab === "booked" && <BookedCard />}
          </View>
          <View className="flex flex-row items-center justify-center py-2">
            <CustomButton
              text="Create New Spaces"
              size={350}
              // height={50}
              bg={Colors.primary}
              onPress={() => addnewSpace()}
            />
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
