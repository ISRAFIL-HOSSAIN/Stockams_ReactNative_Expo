// Import necessary components and styles
import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

// Create your ExploreHeader component
const MainHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href="/(modals)/booking">Booking</Link>
          <View style={styles.rightHeader}>
            <View style={[styles.Btn,{marginRight:10}]}>
              <TouchableOpacity>
                <Ionicons name="language-outline" size={20} />
                {/* <Text style={styles.filterText}>Filter</Text> */}
              </TouchableOpacity>
            </View>
            <View style={[styles.Btn,{marginRight:10}]}>
              <TouchableOpacity >
                <Ionicons name="notifications-outline" size={20} />
                {/* <Text style={styles.filterText}>Filter</Text> */}
              </TouchableOpacity>
            </View>
            <View style={styles.Btn}>
              <TouchableOpacity>
                <Ionicons name="person" size={20} />
                {/* <Text style={styles.filterText}>Filter</Text> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    height: 40,
    paddingTop: 10,
    
  },
  rightHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 2,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 5,
  },
  Btn: {
    width: 30,
    height: 30,
    backgroundColor: "#FFFFFF",
    marginRight: 5,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // Android Elevation
    elevation: 3,
  },
  //   filterBtn: {
  //     width: 25,
  //     height: 25,
  //     padding: 2,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 24,
  //     backgroundColor: "#FFFFFF",
  //     shadowOffset: { width: 0, height: 4 },
  //     shadowOpacity: 0.1,
  //     shadowRadius: 20,
  //     // Android Elevation
  //     elevation: 2,
  //   },

  categoryText: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: Colors.grey,
  },
  filterText: {
    color: "#FFFFFF", // Set the font color here
  },
});

// Export your component
export default MainHeader;
