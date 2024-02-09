// FormikStepper.tsx
import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { Formik } from "formik";
import { FormikStepProps } from "./FormikStep";
import Stepper from "./Stepper";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "@/components/global/common/ui/Button";
import Colors from "@/constants/Colors";

interface FormikStepperProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  steps: any;
}

export function FormikStepper({
  initialValues,
  onSubmit,
  steps,
}: FormikStepperProps): React.JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const modifiedInitialValues = {
    ...initialValues,
    isValid: false,
  };

  function isLastStep() {
    return currentStep === steps.length - 1;
  }
  console.log("islaststep : ", isLastStep());

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Formik
      initialValues={modifiedInitialValues}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        if (isLastStep()) {
          await onSubmit(values);
          setSubmitting(true);
        } else {
          setSubmitting(false);
        }
      }}
      validationSchema={steps[currentStep].props.validationSchema}
    >
      {(formikProps) => (
        <View className="relative h-[100%] w-[100%]">
          {/* <Text>"isSubmitting':{formikProps?.isSubmitting} </Text> */}
          {/* <Text>isSubmitting:{JSON.stringify(formikProps?.isSubmitting)}</Text> */}
          <View className="w-[100%] px-4 flex flex-row justify-center items-center">
            <Stepper
              currentStep={currentStep}
              steps={steps.map((step: any) => step.props.label)}
            />
          </View>

          <View className="h-[500px] w-[100%] ">
            {steps.map((step: any, index: any) => (
              <View
                key={index}
                style={{ display: index === currentStep ? "flex" : "none" , flexDirection: "column"}}
              >
                {React.cloneElement(step, formikProps)}
              </View>
            ))}
          </View>
          <View className="my-2 w-[100%] flex flex-row items-center  absolute   mx-5  bottom-[0px]">
            <View className="w-[50%]">
              <CustomButton
                bg={Colors.primary}
                size={120}
                text="Back"
                height={45}
                showIcon={false}
                disabled={formikProps.isSubmitting || currentStep === 0}
                onPress={() => handlePrev()}
              />
            </View>
            <View className="w-[50%]">
              <CustomButton
                bg={Colors.primary}
                size={120}
                text={currentStep === steps.length - 1 ? "Submit" : "Next"}
                height={45}
                disabled={formikProps.isSubmitting}
                onPress={() => handleNext()}
                showIcon={false}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
