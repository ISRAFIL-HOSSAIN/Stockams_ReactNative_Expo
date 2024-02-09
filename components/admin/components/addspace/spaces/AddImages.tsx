import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";

import { useState, useEffect } from "react";
import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface CustomInputProps {
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const AddImages: React.FC<CustomInputProps> = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const [isError, setIsError] = useState(false);

  const pickImage = async () => {
    // Check if the maximum number of images (5) is reached
    if (values?.spaceImages.length >= 5) {
      // Alert or inform the user that the maximum number of images is reached
      setIsError(!isError);
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 6],
      quality: 1,
    });

    if (!result.canceled) {
      // Update the array of images
      //   setImages((prevImages) => [...prevImages, result.assets[0].uri]);
      setFieldValue("spaceImages", [
        ...values.spaceImages,
        result.assets[0].uri,
      ]);
    }
  };

  const removeImage = (index: number) => {
    const indexToRemove = 0;
    const updatedSpaceImages = values?.spaceImages?.filter(
      (_: any, i: any) => i !== index
    );

    // Set the updated value using setFieldValue
    setFieldValue("spaceImages", updatedSpaceImages);
  };

  return (
    <View className="px-4">
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* <Button title="Select File from" onPress={pickImage} /> */}
        {isError && (
          <Text className="py-3 text-red-500 text-md font-medium">
            {" "}
            * Maximum number of images is reached
          </Text>
        )}
        <TouchableOpacity onPress={() => pickImage()}>
          <View className="flex flex-row items-center justify-between w-[300px] rounded-lg border-primary border-2 py-3 px-4 bg-yellow-100">
            <Text className="text-black text-sm font-medium">
              Select File from
            </Text>
            <Ionicons name="cloud-upload-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>

        {/* Display selected images */}
        <FlatList
          data={values?.spaceImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View className="rounded-lg relative my-4">
              <Image
                source={{ uri: item }}
                style={{ width: 300, height: 220 }}
                className="rounded-lg"
              />

              <View className="absolute top-2 right-2">
                <TouchableOpacity
                  onPress={() => removeImage(index)}
                  className="flex flex-row justify-center space-x-1 items-center bg-gray-700 border-2 border-gray-200 px-2 rounded-lg py-1"
                >
                  <Ionicons name="close" size={24} color="gray" />
                  <Text className="text-white text-sm font-normal">Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          horizontal={false} // Display in a single column
        />
      </View>
    </View>
  );
};
export default AddImages;

const styles = StyleSheet.create({});
