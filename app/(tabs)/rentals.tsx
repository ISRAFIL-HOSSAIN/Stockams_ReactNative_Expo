import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router'
import RentalsHeader from '@/components/admin/header/RentalsHeader'
import StoreCard from '@/components/global/Card'

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
  )
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.97,
    //height:Dimensions.get('window').height,
    margin: 4,
    marginBottom: 20,
  },
});

export default Page