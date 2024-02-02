import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/admin/header/ExploreHeader";
import StoreCard from "@/components/global/Card";
import { ScrollView } from "react-native-gesture-handler";
import { useGet } from "@/hooks";
import { API } from "@/api/endpoints";
import { useAuthUserContext } from "@/context/AuthUserProvider";

const Page = () => {
  
  const { userFound,userData } = useAuthUserContext();
  // console.log("User Data => ", userData); 
  // console.log("User Found : ", userFound);

  // const {data:{data:allSpace},isLoading,isError,error} = useGet({
  //   endpoint:API.GetSpaceForRent,
  //   onSuccess:({data})=>{
     
  //   }

  // })
  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  // if (isError) {
  //   return <Text>Error: {error?.message}</Text>;
  // }

  // console.log("Data : ===>>>>> ", allSpace);
  return (
    <View style={{}}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
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
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.97,
    //height:Dimensions.get('window').height,
    margin: 4,
    marginBottom: 20,
  },
});

export default Page;
