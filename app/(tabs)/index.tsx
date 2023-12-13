import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/admin/header/ExploreHeader'
import Listings from '@/components/host_rental_panel/Listings'

const Page = () => {
  return (
    <View style={{flex : 1}}>
      <Stack.Screen options={{
        header:()=> <ExploreHeader  />
      }}/>

      {/* <Listings /> */}
      {/* <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
      <Link href={'/listing/120'}>Listing details</Link> */}
    </View>
  )
}

export default Page