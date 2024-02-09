import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/components/global/common/CommonInput";

import { useGet } from "@/hooks";
import { API } from "@/api/endpoints";
import CommonCheckBox from "@/components/global/common/ui/Checkbox";
import { useQuery } from "@tanstack/react-query";
import Checkbox from "expo-checkbox";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Features from "./Features";

interface CustomInputProps {
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const Price_Conditions: React.FC<CustomInputProps> = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
 
  return (
    <ScrollView className="px-4">
      <View className=" flex flex-col justify-center items-center">
        <CustomInput
          placeholder="Set Price here"
          label="Set your Price"
          error={errors.pricePerMonth}
          touched={touched.pricePerMonth}
          onChangeText={handleChange("pricePerMonth")}
          value={values?.pricePerMonth}
          type="number"
          rightText="$ USD"
        />
        <CustomInput
          icon="form-dropdown"
          label="Minimum Rental Period"
          placeholder="Select Rental Period"
          onBlur={handleBlur("minimumBookingDays")}
          error={errors.minimumBookingDays}
          touched={touched.minimumBookingDays}
          onChangeText={handleChange("minimumBookingDays")}
          value={values.minimumBookingDays}
          type="dropdown"
          options={options}
        />

        <View className="w-[100%] pb-8 flex flex-col justify-center items-center mt-4 bg-white shadow-md shadow-gray-200">
          <Text className="text-[16px] font-bold sm:text-[14px] xs:text-[12px] py-2 ">
            Minimum conditions required of tenats:{" "}
          </Text>
          <Text
            className="text-sm text-start font-normal leading-relaxed text-gray-600 px-1"
            style={{ textAlign: "left" }}
          >
            Costocked goods are covered by the insurance policy taken out by
            Costockage (see Insurance conditions).
            {"\n"}
            {"\n"}
            The back card is valid and verified by the Leetchi system.{"\n"}
            {"\n"}
            Objects prohibited for storage include, among other; stolen,
            explosive, living, illegal objects.
          </Text>
        </View>

        <View className="border border-tertiary rounded-lg shadow-lg bg-white w-[100%] relative py-4 ">
          <Text
            style={{ fontSize: 19, fontWeight: "bold" }}
            className="pb-4 pl-2"
          >
            Features
          </Text>
          <Features values={values} setFieldValue={setFieldValue}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Price_Conditions;

const options = [
  {
    value: "7",
    label: "1 Week",
  },
  {
    value: "14",
    label: "2 Weeks",
  },
  {
    value: "30",
    label: "1 Month",
  },
  {
    value: "60",
    label: "2 Months",
  },
  {
    value: "90",
    label: "3 Months",
  },
  {
    value: "120",
    label: "4 Months",
  },
  {
    value: "150",
    label: "5 Months",
  },
  {
    value: "180",
    label: "6 Months",
  },
  {
    value: "365",
    label: "1 Year",
  },
];


