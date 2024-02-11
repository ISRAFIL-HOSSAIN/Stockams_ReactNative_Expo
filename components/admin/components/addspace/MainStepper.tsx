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
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const {
    mutateAsync: spaceCreate,
    isLoading: spaceIsLoading,
    isSuccess,
    isError,
    error,
    data,
  } = useCreate({
    endpoint: API.SpaceForRentCreate,
    isMultiPart: true, // Assuming you have file data
    onSuccess: () => console.log("Data created successfully!"),
    onError: (error) => console.error("Error creating data:", error),
  });

  // const { mutate: spaceCreate, isLoading: spaceIsLoading } = useCreate({
  //   endpoint: API.SpaceForRentCreate,
  //   isMultiPart: true,
  //   onSuccess: () => {
  //     toast.show("Space Create Successfully ! 👋", { type: "success" });
  //     router.push("/(main)/(home)/(owner)/(tabs)");
  //   },
  //   onError: () => {
  //     // Handle update error, e.g., display an error message
  //     toast.show("Something went wrong ! 👋", { type: "danger" });
  //   },
  // });

  const handleSubmit = async (data: any) => {
    if (spaceIsLoading) {
      return console.log("Data creation in progress...");
    }

    try {
      const payload = new FormData();
      payload.append("name", data.name);
      payload.append("description", data.description);
      payload.append("location", data.location);
      payload.append("area", data.area);
      payload.append("height", data.height);
      payload.append("pricePerMonth", data.pricePerMonth);
      payload.append("minimumBookingDays", data.minimumBookingDays);
      payload.append("type", data.type);
      payload.append("accessMethod", data.accessMethod);
      
      data?.spaceImages?.forEach((image:any) => {
        console.log("Type of image", typeof image)
        payload.append("spaceImages", image);
      });
  
      data?.storageConditions?.forEach((item:any) => {
        payload.append("storageConditions", item);
      });
  
      data?.unloadingMovings?.forEach((item:any) => {
        payload.append("unloadingMovings", item);
      });
  
      data?.spaceSecurities?.forEach((item:any) => {
        payload.append("spaceSecurities", item);
      });
  
      data?.spaceSchedules?.forEach((item:any) => {
        payload.append("spaceSchedules", item);
      });
      
      
      await spaceCreate(payload); // Trigger the mutation with form data
      
      if (isSuccess) {
        // Handle successful creation, e.g., clear form, show success message
        console.log("Successfully created");
      }
    } catch (error) {
      // Handle errors, e.g., display error messages
      console.log({ error });
    }
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
