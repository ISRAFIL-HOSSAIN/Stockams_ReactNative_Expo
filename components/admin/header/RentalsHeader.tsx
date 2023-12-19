import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const RentalsHeader = ({tab,setTab}:{tab:any,setTab:any}) => {

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View className="flex flex-row ">
          <TouchableOpacity
            onPress={() => {
              setTab("all");
            }}
          >
            <View
              className={` ${
                tab === "all" ? "bg-tertiary" : "bg-white"
              } border-l border-t border-b rounded-l-md p-1 py-2 border-gray-300 `}
            >
              <Text>All Spaces</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab("booked");
            }}
          >
            <View
              className={` ${
                tab === "booked" ? "bg-tertiary" : "bg-white"
              } border-r border-t border-b rounded-r-md p-1 py-2 border-gray-300 `}
            >
              <Text>Booked Spaces</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <CustomButton
          text="Map View"
          size={90}
          bg={Colors.primary}
          onPress={() => Alert.alert("Reject")}
        />
        <CustomButton
          text="Map View"
          size={90}
          bg={Colors.primary}
          onPress={() => Alert.alert("Reject")}
        /> */}
      </View>
      <CustomButton
        text="Map View"
        size={90}
        bg={Colors.primary}
        onPress={() => Alert.alert("Reject")}
      />
    </View>
  );
};

export default RentalsHeader;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.97,
    //height:Dimensions.get('window').height,
    paddingTop: 5,
    paddingRight: 5,
    margin: 8,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
