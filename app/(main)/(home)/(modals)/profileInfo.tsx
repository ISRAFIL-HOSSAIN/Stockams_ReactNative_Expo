import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import { ScrollView } from "react-native-gesture-handler";
import BackHeader from "@/components/global/header/BackHeader";
import { Stack, router } from "expo-router";
import CustomInput from "@/components/global/common/CommonInput";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import { Formik } from "formik";
import { useToast } from "react-native-toast-notifications";
import { ProfilevalidationSchema } from "@/components/global/profile/validation/ProfileValidation";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { AntDesign, Entypo } from "@expo/vector-icons";
const Page = () => {
  const toast = useToast();
  const [isEditable, setIsEditable] = useState(false);
  console.log({ isEditable });

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  return (
    <CommonLayout>
      <BackHeader Headertext="Back to" />
      <View className="p-3 mt-1 ml-2 mb-2 flex flex-row justify-between items-center">
        <Text className=" text-[18px] font-medium">Personal Information</Text>
        <TouchableOpacity onPress={() => handleEdit()}>
          {isEditable ? (
            <View className="bg-slate-200 rounded-3xl h-[35px] w-[35px] justify-center items-center ">
              <AntDesign name="closecircleo" size={24} color={Colors.black} />
            </View>
          ) : (
            <View className="bg-slate-200 rounded-3xl h-[35px] w-[35px] justify-center items-center">
              <Entypo name="edit" size={24} color={Colors.black} />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <View className="w-[92%] h-44 items-center justify-center bg-white rounded-3xl shadow">
          <Image
            className="w-full h-full  absolute rounded-3xl"
            source={require("../../../../assets/images/profile.png")}
          />
          <Image
            className="w-[35px] h-[35px]"
            source={require("../../../../assets/images/profile_edit.png")}
          />
        </View>
      </View>

      <Formik
        initialValues={{
          email: "",
          fullName: "",
          address: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ProfilevalidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView className="flex-col h-auto m-3 shadow-lg shadow-gray-400 bg-white rounded-xl ">
            <View className="p-3">
              <CustomInput
                icon="person-circle-sharp"
                placeholder="Enter your Full Name"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                label="Full Name"
                onBlur={handleBlur("fullName")}
                error={errors.fullName}
                touched={touched.fullName}
                onChangeText={handleChange("fullName")}
                value={values.fullName}
                type="text"
                isEditable={isEditable}
              />
              <CustomInput
                icon="mail"
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                label="Email"
                onBlur={handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                onChangeText={handleChange("email")}
                value={values.email}
                type="text"
                isEditable={isEditable}
              />
              <CustomInput label="Address" placeholder="USA" />
            </View>
            {isEditable && (
              <View className="flex flex-row justify-between mx-5 my-4 ">
                <CustomButton
                  text="Reject"
                  size={140}
                  bg={Colors.white}
                  onPress={() => router.back()}
                />
                <CustomButton
                  bg={Colors.primary}
                  size={140}
                  text="Save Changes"
                  onPress={() => {
                    handleEdit();
                  }}
                />
              </View>
            )}
          </ScrollView>
        )}
      </Formik>
    </CommonLayout>
  );
};

export default Page;

const styles = StyleSheet.create({});
