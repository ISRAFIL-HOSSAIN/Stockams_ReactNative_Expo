// Import necessary components and styles
import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";


// Define your categories array
const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "",
  },
];

// Create your ExploreHeader component
const ExploreHeader = () => {
  const data = [
    {
      key: 1,
      value: 30,
      svg: { fill: "red" },
    },
    {
      key: 2,
      value: 70,
      svg: { fill: "transparent" },
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Doughnut Pie Chart */}
        <View style={styles.chartContainer}>
          {/* <PieChart style={{ height: 200 }} data={data} /> */}
        </View>

        {/* Bottom Row with Total Space, Booked, and Open Space */}
        <View style={styles.bottomRow}>
          <Text style={styles.label}>Total Space: 100</Text>
          <Text style={styles.label}>Booked: 30</Text>
          <Text style={styles.label}>Open Space: 70</Text>
        </View>
      </View>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7E0808",
    flex: 1,
  },
  card: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 18,
    padding: 15,
    margin: 10,
    height: 120,
  },
  chartContainer: {
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    color: 'white',
  },
});

// Export your component
export default ExploreHeader;
