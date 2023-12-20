import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
const CommonLoader = () => {
  return (
    <View className='w-full h-full items-center'>
        <View className='w-20 h-20 justify-center items-center p-5 rounded-xl bg-white'>
           <ProgressBar />
        </View>
     
    </View>
  )
}

export default CommonLoader;