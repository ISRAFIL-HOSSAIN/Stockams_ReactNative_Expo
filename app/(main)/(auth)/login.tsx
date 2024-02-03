import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CustomInput from "@/components/global/common/CommonInput";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import {
  looper,
  logo,
  google,
  apple,
  renter,
  space_owner,
} from "@/assets/images";
import { signinValidationSchema } from "@/components/global/auth/validation/signinValidationSchema";
import { Formik, useFormik } from "formik";
import { Alert } from "react-native";
import { Link, useRouter } from "expo-router";

import { useToast } from "react-native-toast-notifications";
import { API } from "@/api/endpoints";

import {
  getUserRole,
  setAccessToken,
  setRefreshToken,
  setUserRole,
} from "@/utils/localStorageUtils";
import adminAPI from "@/api/adminAPI";
import CommonProgress from "../(home)/(modals)/commonLoader";
import { useAuthUserContext } from "@/context/AuthUserProvider";

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState("RENTER");
  const router = useRouter();
  const { userRole } = useAuthUserContext();
  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutateAsync: signInMutation, isLoading: isSigninLoading } =
    useMutation((payload) => adminAPI.post(API.Login, payload));

  const handleSubmit = async (
    values: any,
    { setSubmitting, setErrors }: { setSubmitting: any; setErrors: any }
  ) => {
    try {
      setSubmitting(true);
      const response = await signInMutation({ ...values, role: tab });

      if (response?.data?.data) {
        console.log("Data===>", response?.data?.data);
        await setAccessToken(response.data.data?.accessToken);
        await setRefreshToken(response.data.data?.refreshToken);
        // await setUserRole(userRole && userRole);
        queryClient.resetQueries();
        toast.show("Signin Successfully ! 👋", { type: "success" });
      }
      setSubmitting(false);
    } catch (err) {
      toast.show("Something went wrong 👋", {
        type: "danger",
      });
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      {isSigninLoading && <CommonProgress />}
      <View style={styles.backgroundImageContainer}>
        <Image source={looper} style={styles.backgroundImage} />
      </View>
      <View className="flex justify-center items-center mt-16 w-full">
        <Image
          source={logo}
          className="w-60 h-20 object-contain"
          style={styles.logo}
        />
      </View>
      {/* <Image source={logo} style={} /> */}
      <ScrollView style={styles.scrollView}>
        <Formik
          initialValues={{ email: "", password: "", role: "RENTER" }}
          onSubmit={handleSubmit}
          validationSchema={signinValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <Text style={styles.loginWithText}>LOGIN WITH</Text>
              <View className="flex flex-row justify-between pt-4 pb-3">
                <CustomButton
                  bg={tab === "RENTER" ? Colors.akcent : Colors.gray2}
                  size={140}
                  text="Renter"
                  height={45}
                  icon={renter}
                  showIcon={true}
                  onPress={() => setTab("RENTER")}
                />
                <CustomButton
                  bg={tab === "OWNER" ? Colors.akcent : Colors.gray2}
                  size={150}
                  text="Space Owner"
                  height={45}
                  icon={space_owner}
                  showIcon={true}
                  onPress={() => setTab("OWNER")}
                />
              </View>

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
              />

              <CustomInput
                icon="key"
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={showPassword ? false : true}
                autoCompleteType="password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
                onChangeText={handleChange("password")}
                value={values.password}
                passwordIcon={true}
                setShowPassword={setShowPassword}
                type="text"
              />

              <View style={styles.buttonContainer}>
                <CustomButton
                  bg={Colors.primary}
                  size={300}
                  text="Login"
                  height={45}
                  onPress={() => handleSubmit()}
                />
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                <Text style={styles.continueWithText}>OR CONTINUE WITH</Text>
                <View style={styles.socialIconsContainer}>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Press google Login")}
                  >
                    <Image source={google} alt="google" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Press Apple Login ")}
                  >
                    <Image source={apple} alt="apple" />
                  </TouchableOpacity>
                </View>
                <View style={styles.createAccountContainer}>
                  <Text style={styles.noAccountText} className="pr-5">
                    {`Don’t have an account`}
                  </Text>
                  <Link href={"/signup"}>
                    <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
                  </Link>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

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
    marginTop: 20,
  },
  loginWithText: {
    color: "#ABB0B6",
    marginVertical: 3,
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 4,
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

export default Page;
