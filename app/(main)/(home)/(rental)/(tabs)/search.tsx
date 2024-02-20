import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/global/common/SearchBar";
import BackHeader from "@/components/global/header/BackHeader";
import CustomButton from "@/components/global/common/ui/Button";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import { ScrollView } from "moti";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

const Page = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: any) => {
    setActiveTab(index);
    // Do something when a tab is pressed
  };

  return (
    <View>
      <View className="flex flex-row justify-between items-center px-3 mt-3">
        <BackHeader Headertext="Back to Home" />
        <CustomButton
          text="Map View"
          size={100}
          bg={Colors.primary}
          onPress={() => router.back()}
        />
      </View>
      <View className="mt-4">
        <SearchBar onSearch={handleSearch} text="Search for a store" />
      </View>
      <View className="m-3">
        <ScrollView
          horizontal
          contentContainerStyle={styles.tabContainer}
          showsHorizontalScrollIndicator={false}
        >
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTabPress(index)}
              style={[
                styles.tabButton,
                index === activeTab && styles.activeTabButton,
              ]}
            >
              <Text style={(index===activeTab && styles.tabText)}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#E7E9E2",

  },
  activeTabButton: {
    backgroundColor: "#2D2D2A",
    color:"#FFFFFF"
  },
  tabButtonText: {
    color: "#FFFFFF",
  },
  tabText:{
    color:"#000000"
  }
});
