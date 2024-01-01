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
import { looper, logo, google, facebook, apple } from "@/assets/images";
import { signinValidationSchema } from "@/components/global/auth/validation/signinValidationSchema";
import APICONFIG from "@/api/API";
import { Formik, useFormik } from "formik";
import { Alert } from "react-native";
import { Link } from "expo-router";

import { useToast } from "react-native-toast-notifications";
type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log("Values", values);
            showToast();

            Alert.alert(`Email: ${values.email}, Password: ${values.password}`);
          }}
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
                  <Link href={"/(modals)/signup"}>
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

export default Login;
