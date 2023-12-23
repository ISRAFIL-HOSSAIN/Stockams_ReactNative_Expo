import { View, Text } from "react-native";
import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import BackHeader from "@/components/global/header/BackHeader";

const Page = () => {
  return (
    <CommonLayout>
        <BackHeader Headertext="Back to" />
      <View>
        <Text>createNewspace</Text>
      </View>
    </CommonLayout>
  );
};

export default Page;
