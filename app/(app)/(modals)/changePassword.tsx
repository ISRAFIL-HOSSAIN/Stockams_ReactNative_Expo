import { View, Text, Alert } from 'react-native'
import React from 'react'
import CommonLayout from '@/components/layout/CommonLayout';
import BackHeader from '@/components/global/header/BackHeader';
import CustomInput from '@/components/global/common/CommonInput';
import CustomButton from '@/components/global/ui/Button';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <CommonLayout>
      <BackHeader Headertext="Back to Profile" />
      <View className="flex-col h-[550px] m-3 shadow-lg shadow-gray-400 bg-white rounded-xl ">
        <View className="p-3 mt-1 ml-1 mb-2">
          <Text className=" text-[18px] font-medium">Change Password</Text>
        </View>
        
        <View>
        <CustomInput type="password" label="Old Password" PlaceHolder="Old Password"/>
        <CustomInput type="password" label="New Password" PlaceHolder="New Password"/>
        <CustomInput type="password" label="Retype Password" PlaceHolder="Retype Password"/>
        </View>
        <View className="flex flex-row justify-between py-2 mx-3 my-4 ">
          <CustomButton text="Reset" size={140} bg={Colors.white} onPress={() => Alert.alert('Reset')}/>
          <CustomButton bg={Colors.primary} size={140} text="Save Changes" onPress={()=> Alert.alert('Button clicked')}/>
        </View>
      </View>
    </CommonLayout>
  )
}

export default Page;