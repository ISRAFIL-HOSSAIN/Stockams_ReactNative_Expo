import { StyleSheet, Text, View,Image, BackHandler } from 'react-native'
import React from 'react'
import CommonLayout from '@/components/layout/CommonLayout'
import { ScrollView } from 'react-native-gesture-handler'
import BackHeader from '@/components/global/header/BackHeader'

const Page = () => {
  return (
    <CommonLayout>
      <BackHeader Headertext="Back to Profile"/>
      <View className="flex-col h-[528px] m-3 shadow-lg shadow-gray-400 bg-white rounded-xl ">
      <View className='p-3 mt-1 ml-2 mb-2'>
      <Text className=' text-[18px] font-medium'>Personal Information</Text>
      </View>
      <View className='items-center'>
      <View className="w-[92%] h-44 items-center justify-center bg-white rounded-3xl shadow">
        <Image
          className="w-full h-full  absolute rounded-3xl"
          source={require("../../assets/images/profile.png")}
        />
        <Image
          className="w-[35px] h-[35px]"
          source={require("../../assets/images/profile_edit.png")}
        />
      </View>
      </View>
      
      </View>

    </CommonLayout>
  )
}

export default Page

const styles = StyleSheet.create({})