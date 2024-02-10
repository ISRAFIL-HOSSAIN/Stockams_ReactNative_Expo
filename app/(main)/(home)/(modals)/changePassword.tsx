import { View, Text, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import BackHeader from "@/components/global/header/BackHeader";
import Colors from "@/constants/Colors";
import { Formik } from "formik";
import { setAccessToken, setRefreshToken } from "@/utils/localStorageUtils";
import { useToast } from "react-native-toast-notifications";
import CustomInput from "@/components/global/common/CommonInput";
import CustomButton from "@/components/global/common/ui/Button";
import { changePasswordValidationSchema } from "@/validation/profile/changePasswordValidation";
import { ScrollView } from "moti";
import { useMutation } from "@tanstack/react-query";
import adminAPI from "@/api/adminAPI";
import { API } from "@/api/endpoints";
import { useRouter } from "expo-router";


const Page = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const { mutateAsync: changePassMutation, isLoading: isChangePassLoading } =
  useMutation((payload) => adminAPI.post(API.ChangePassword, payload));
  
  const handleSubmit = async (
    values: any,
    { setSubmitting, setErrors }: { setSubmitting: any; setErrors: any }
  ) => {
    try{
      setSubmitting(true);
      const response = await changePassMutation(values);
      if(response){
        toast.show("ChangePassword Successfully ! 👋",{type: "success",})
        router.push("/(main)/(home)/(rental)/(tabs)/rentalprofile")
      }
      setSubmitting(false);
     
    } 
    catch(err){
      toast.show("Something went wrong 👋", {
        type: "danger",
      });
      setSubmitting(false);
      setErrors(err);
    }
    

    
  };

  return (
    <CommonLayout>
      <BackHeader Headertext="Back to Profile" />
      <ScrollView className="flex-col h-[550px] m-3 shadow-lg shadow-gray-400 bg-white rounded-xl ">
        <View className="p-3 mt-1 ml-1 mb-2">
          <Text className=" text-[18px] font-medium">Change Password</Text>
        </View>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            retypePassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={changePasswordValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting
          }) => (
            <View style={styles.formContainer}>
              <CustomInput
                icon="key"
                label="Current Password"
                placeholder="Enter your password"
                secureTextEntry={showOldPassword ? false : true}
                autoCompleteType="oldPassword"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
                onBlur={handleBlur("oldPassword")}
                error={errors.oldPassword}
                touched={touched.oldPassword}
                onChangeText={handleChange("oldPassword")}
                value={values.oldPassword}
                passwordIcon={true}
                setShowPassword={setShowOldPassword}
                type="text"
              />
              <CustomInput
                icon="key"
                label="New Password"
                placeholder="Enter your password"
                secureTextEntry={showNewPassword ? false : true}
                autoCompleteType="password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
                onBlur={handleBlur("newPassword")}
                error={errors.newPassword}
                touched={touched.newPassword}
                onChangeText={handleChange("newPassword")}
                value={values.newPassword}
                passwordIcon={true}
                setShowPassword={setShowNewPassword}
                type="text"
              />
              <CustomInput
                icon="key"
                label="Retype Password"
                placeholder="Enter your password"
                secureTextEntry={showNewPassword ? false : true}
                autoCompleteType="retypePassword"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
                onBlur={handleBlur("retypePassword")}
                error={errors.retypePassword}
                touched={touched.retypePassword}
                onChangeText={handleChange("retypePassword")}
                value={values.retypePassword}
                passwordIcon={true}
                setShowPassword={setShowNewPassword}
                type="text"
              />
              <View className="flex flex-row justify-between py-2 mx-3 my-4 ">
                <CustomButton
                  text="Reset"
                  size={140}
                  bg={Colors.white}
                  onPress={() => Alert.alert("Reset")}
                />
                <CustomButton
                  bg={Colors.primary}
                  size={140}
                  text="Save Changes"
                  disabled={isSubmitting}
                  onPress={() => handleSubmit()}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </CommonLayout>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBFAE6",
    position: "relative",
  },
  backgroundImageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    marginTop: 5,
    alignItems: "center",
    resizeMode: "contain",
  },
  scrollView: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 100,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
  loginWithText: {
    color: "#ABB0B6",
    marginVertical: 3,
  },
  forgotPasswordText: {
    color: "#ABB0B6",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 6,
  },
  continueWithText: {
    color: "#ABB0B6",
    marginTop: 7,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 2,
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 2,
  },
  noAccountText: {
    color: "#ABB0B6",
    fontSize: 13,
  },
  createAccountText: {
    color: "#2D2D2A",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 2,
  },
});
