import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const BackHeader: React.FC<any> =({ Headertext }) => {
  return (
    <View className='flex-row items-center space-x-2 bg-white'>
    <Image
      className="w-[30px] h-[30px]"
      source={require("../../../assets/images/back.png")}
    />
     <Text className='font-semibold text-[14px]'>{Headertext}</Text>
  </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({})