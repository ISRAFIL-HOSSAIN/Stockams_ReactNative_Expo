import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View>
      
      {/* <Listings /> */}
      <Link href={'/(modals)/profileInfo'}>Profile information</Link>
      <Link href={'/(modals)/changePassword'}>Change Password</Link>
      <Link href={'/(modals)/managePayment'}>Manage Payment</Link>
    </View>
  )
}

export default profile