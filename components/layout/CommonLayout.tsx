import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const CommonLayout = ({ children }: { children: any }) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.97,
    //height:Dimensions.get('window').height,
    padding: 5,
    marginTop: 40,
  },
});
export default CommonLayout;
