import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const HorizontalProgress = () => {
  return (
    <View className='w-full h-full items-center'>
        
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
          color="#2196F3"
        />
     
    </View>
  )
}

export default HorizontalProgress;