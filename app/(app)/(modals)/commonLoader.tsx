import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Loader } from '@/assets/images'

const CommonProgress = () => {
  return (
    <View className='h-full items-center flex flex-col justify-center'>
      <View className="w-60 h-48 justify-center items-center p-5 rounded-xl bg-white">
        <Image
          className="w-full h-full rounded-2xl"
          source={Loader}
        />
      </View>
    </View>
  )
}

export default CommonProgress
