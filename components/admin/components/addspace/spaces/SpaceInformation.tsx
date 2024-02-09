import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/components/global/common/CommonInput";

import { API } from "@/api/endpoints";
import { useGet } from "@/hooks";
import SpaceInfoSkeleton from "@/components/global/progress/skeleton/SpaceInfoeSkeleton";

interface CustomInputProps {
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const SpaceInformation: React.FC<CustomInputProps> = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  
  const spaceTypeEndpoint = `${API.GetSpaceType}?Page=1&PageSize=20`;
  const spaceAccessEndpoint = `${API.GetAllSpaceAccess}?Page=1&PageSize=20`;

  const { data: { data:spaceType } = {}, isLoading: spaceTypeLoading=true } = useGet({ endpoint: spaceTypeEndpoint });
  const { data: {data:spaceAccessData} = {}, isLoading: spaceAccessLoading=true } = useGet({ endpoint: spaceAccessEndpoint });

  if (spaceTypeLoading || spaceAccessLoading) {
    return <SpaceInfoSkeleton />
  }
 

  return (
    <ScrollView className="px-4">
      <View className="h-full">
        {/* <Text>{JSON.stringify(values)}</Text> */}
        
        <CustomInput
          icon="text"
          placeholder="Type here"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          label="Space Name"
          onBlur={handleBlur("name")}
          error={errors.name}
          touched={touched.name}
          onChangeText={handleChange("name")}
          value={values.name}
          type="text"
          rightText="m2"
        />
        <CustomInput
          icon="form-dropdown"
          label="Select Space Type"
          placeholder="Select Space "
          error={errors.type}
          touched={touched.type}
          onChangeText={handleChange("type")}
          setFieldValue={setFieldValue}
          value={values?.type}
          values={values}
          type="dropdown"
          options={spaceType?.data || []}
          isDropdownChangeAnotherField={true}
        />
        <View
          className="border border-tertiary rounded-lg shadow-lg bg-white "
          style={{ padding: 5, margin: 4 }}
        >
          <Text className="text-md text-gray-400 font-medium text-center pt-3">
            INDICATE THE SIZE OF YOUR SPACE
          </Text>
          <CustomInput
            placeholder="Type here"
            label="Area"
            error={errors.area}
            touched={touched.area}
            onChangeText={handleChange("area")}
            value={values.area}
            type="number"
            rightText="m2"
          />
          <CustomInput
            placeholder="Type here"
            label="Height"
            onBlur={handleBlur("height")}
            error={errors.height}
            touched={touched.height}
            onChangeText={handleChange("height")}
            value={values.height}
            type="number"
            rightText="m"
          />
          <View className="flex flex-row justify-center items-center">
            <Text className="text-sm text-center font-medium text-gray-300">
              PRICE{" "}
            </Text>
            <Text className="text-sm text-center font-medium text-gray-800 px-2">
              ${values?.pricePerMonth}
            </Text>
            <Text className="text-sm text-center font-medium text-gray-300">
              PER M
            </Text>
          </View>
          <View className="flex flex-row justify-between items-center bg-tertiary rounded-lg mt-3 py-3 px-3">
            <Text>Which Equals</Text>
            <Text>
              {values?.area && values?.height
                ? values?.area * values?.height
                : 0}{" "}
              m3
            </Text>
          </View>
        </View>

        <CustomInput
          icon="form-dropdown"
          label="Define the access your offer to tenants"
          placeholder="Key Handover"
          onBlur={handleBlur("accessMethod")}
          error={errors.accessMethod}
          touched={touched.accessMethod}
          onChangeText={handleChange("accessMethod")}
          value={values.accessMethod}
          type="dropdown"
          options={spaceAccessData?.data || []}
        />

        <CustomInput
          placeholder="Type Location"
          label="Location"
          onBlur={handleBlur("location")}
          error={errors.location}
          touched={touched.location}
          onChangeText={handleChange("location")}
          value={values.location}
          type="text"
          rightIcon="location"
        />
        <CustomInput
          placeholder="Type Here"
          label="Description"
          onBlur={handleBlur("description")}
          error={errors.description}
          touched={touched.description}
          onChangeText={handleChange("description")}
          value={values.description}
          type="richtext"
          height={100}
        />
      </View>
    </ScrollView>
  );
};

export default SpaceInformation;
