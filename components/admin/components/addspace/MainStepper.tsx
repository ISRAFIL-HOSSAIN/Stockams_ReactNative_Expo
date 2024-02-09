import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SpaceInformation from "./spaces/SpaceInformation";
import AddImages from "./spaces/AddImages";
import Price_Conditions from "./spaces/Price_Conditions";
import { FormikStepper } from "./stepper/FormikStepper";
import { FormikStep } from "./stepper/FormikStep";
import {
  addSpaceValidation,
  conditionValidation,
  imagesValidation,
} from "@/validation/space/addSpaceValidation";

type Props = {};

const MainStepper = () => {
  const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

  return (
    <View className=" flex flex-col  items-center  w-[100%]">
      <FormikStepper
        initialValues={{
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
        }}
        onSubmit={async values => {
          await sleep(3000);
          console.log("values", values);
        }}
        steps={[
          <FormikStep label="Space Info." validationSchema={addSpaceValidation}>
            {(formikProps) => <SpaceInformation {...formikProps} />}
          </FormikStep>,
          <FormikStep label="Images" validationSchema={imagesValidation}>
            {(formikProps) => <AddImages {...formikProps} />}
          </FormikStep>,
          <FormikStep label="Price" validationSchema={conditionValidation}>
            {(formikProps) => <Price_Conditions {...formikProps} />}
          </FormikStep>,
        ]}
      />
    </View>
  );
};

export default MainStepper;
