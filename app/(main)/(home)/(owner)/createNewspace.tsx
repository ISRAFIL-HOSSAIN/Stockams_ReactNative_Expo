import { View, Text } from 'react-native'
import React from 'react'
import MainStepper from '@/components/admin/components/addspace/MainStepper'
import CommonLayout from '@/components/layout/CommonLayout'
import BackHeader from '@/components/global/header/BackHeader'


const createNewspace = () => {
  return (
    <CommonLayout>
      <BackHeader Headertext="Back to" />
      <View className='mb-16'>
      <MainStepper />
      </View>
     
    </CommonLayout>
  )
}

export default createNewspace