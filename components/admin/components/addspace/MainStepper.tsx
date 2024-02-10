import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SpaceInformation from "./spaces/SpaceInformation";
import AddImages from "./spaces/AddImages";
import Price_Conditions from "./spaces/Price_Conditions";
import Stepper from "./stepper/Stepper";
import { useCreate } from "@/hooks";
import { API } from "@/api/endpoints";
import { useToast } from "react-native-toast-notifications";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import adminAPI from "@/api/adminAPI";
import convertNumber from "@/utils/commonFunction";

type Props = {};

const MainStepper = () => {
  const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

  const steps = ["Space Info.", "Images", "Price"];
  const [step, setStep] = useState(1);
  const toast = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState<any>({
    name: "",
    type: "",
    area: 0,
    height: 0,
    pricePerMonth: 0,
    minimumBookingDays: "",
    accessMethod: "",
    location: "",
    description: "",
    spaceImages: [],
    spaceSchedules: [],
    storageConditions: [],
    spaceSecurities: [],
    unloadingMovings: [],
  });

  const nextStep = () => {
    setStep(step + 1);
    console.log("Current FormData ===> ", formData);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // const {mutate:spaceCreate, isLoading:spaceCreate} = useCreate({
  //   endpoint:API.SpaceForRentCreate,
  //   isMultiPart:true,
  //   onSuccess:()=>{
  //     toast.show("Space Create Successfully ! 👋",{type: "success",})
  //     router.push("/(main)/(home)/(owner)/(tabs)")
  //   },
  //   onError: () => {
  //     // Handle update error, e.g., display an error message
  //     toast.show("Something went wrong ! 👋",{type: "danger",})
  //   },
  // })

  const { mutateAsync: spaceCreate, isLoading: spaceIsLoading } = useMutation(
    (payload) => adminAPI.post(API.SpaceForRentCreate, payload)
  );

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        minimumBookingDays: convertNumber(formData?.minimumBookingDays),
        pricePerMonth: convertNumber(formData?.pricePerMonth),
        area: convertNumber(formData?.area),
        height: convertNumber(formData?.height),

      }
      const response = await spaceCreate(payload);
      console.log(response)

    } catch (error: any) {
      console.log(error.response.message?.error);
      if (error.response) {
        console.error(
          "Server responded with an error status:",
          error.response.status
        );
        console.error("Error message:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      throw error;
    }
    console.log("Form submitted ====> ", formData);
  };

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return (
          <SpaceInformation
            onSubmit={nextStep}
            data={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <AddImages
            onSubmit={nextStep}
            prevStep={prevStep}
            data={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <Price_Conditions
            onSubmit={handleSubmit}
            prevStep={prevStep}
            data={formData}
            setFormData={setFormData}
            isLoading={spaceIsLoading}
          />
        );
      default:
    }
  };

  return (
    <View className="w-[100%] h-[100%]">
      <Stepper currentStep={step} steps={steps} />
      <View className="mb-10">{displayStep(step)}</View>
    </View>
  );
};

export default MainStepper;
