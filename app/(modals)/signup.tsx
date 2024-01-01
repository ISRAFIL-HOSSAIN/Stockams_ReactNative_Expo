import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import CustomInput from "@/components/global/common/CommonInput";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import {
  looper,
  logo,
  google,
  facebook,
  apple,
  space_owner,
  renter,
} from "@/assets/images";
import APICONFIG from "@/api/API";
import { Formik, useFormik } from "formik";
import { Alert } from "react-native";
import { Link } from "expo-router";

import { signupValidationSchema } from "@/components/global/auth/validation/signupValidationSchema";
import { useToast } from "react-native-toast-notifications";

type FormValues = {
  email: string;
  password: string;
  name: string;
  phone: string;
  dob: string;
  terms: boolean;
};

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState("renter");

  const toast = useToast();
  const showToast = () => {
    toast.show("This is some something 👋", {
      type: "success",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <Image source={looper} style={styles.backgroundImage} />
      </View>
      <Image source={logo} style={styles.logo} />
      <ScrollView style={styles.scrollView}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            phone: "",
            dob: "",
            terms: "",
          }}
          onSubmit={(values) => {
           
            let data = {...values,type: tab}
            console.log("Values", data);
            showToast();
            Alert.alert(
              `Email: ${values.email}, Password: ${values.password}, DOB : ${values.dob}`
            );
          }}
          validationSchema={signupValidationSchema}
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
              <Text style={styles.loginWithText}>CREATE ACCOUNT WITH </Text>
              <View className="flex flex-row justify-between pt-4 pb-3">
                <CustomButton
                  bg={tab === "renter" ? Colors.akcent : Colors.gray2}
                  size={140}
                  text="Renter"
                  height={45}
                  icon={renter}
                  showIcon={true}
                  onPress={() => setTab("renter")}
                />
                <CustomButton
                  bg={tab === "owner" ? Colors.akcent : Colors.gray2}
                  size={150}
                  text="Space Owner"
                  height={45}
                  icon={space_owner}
                  showIcon={true}
                  onPress={() => setTab("owner")}
                />
              </View>

              <CustomInput
                icon="person-circle-sharp"
                placeholder="Enter your Full Name"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                label="Full Name"
                onBlur={handleBlur("name")}
                error={errors.name}
                touched={touched.name}
                onChangeText={handleChange("name")}
                value={values.name}
                type="text"
              />
              <CustomInput
                icon="ios-call-sharp"
                placeholder="Enter your Phone Number"
                autoCapitalize="none"
                keyboardAppearance="dark"
                keyboardType="numeric"
                returnKeyType="next"
                returnKeyLabel="next"
                label="Phone"
                onBlur={handleBlur("phone")}
                error={errors.phone}
                touched={touched.phone}
                onChangeText={handleChange("phone")}
                value={values.phone}
                type="text"
              />
              <CustomInput
                icon="md-calendar"
                placeholder="Enter your Date of Birth"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                label="DOB"
                onBlur={handleBlur("dob")}
                error={errors.dob}
                touched={touched.dob}
                onChangeText={handleChange("dob")}
                value={values.dob}
                type="date"
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
                  text="Create Account"
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
                <View style={styles.createAccountContainer} className="mb-10">
                  <Text style={styles.noAccountText} className="pr-3 ">
                    {"Already have an account"}
                  </Text>
                  <Link href={"/(modals)/login"}>
                    <Text style={styles.createAccountText}>Login Here</Text>
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
    marginTop: 60,
    alignSelf: "center",
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

export default Signup;
