//External Imports
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import { Formik, Field } from "formik";
import { object, mixed, number } from "yup";
import React, { FC, useState } from "react";

//Internal Imports
import CommonLayout from "@/components/layout/CommonLayout";
import BackHeader from "@/components/global/header/BackHeader";
import CustomInput from "@/components/global/common/CommonInput";
import FormikStepper from "@/components/admin/components/spaceCreated/FormikStepper";
// import SpaceInfoStep from "@/components/admin/components/spaceCreated/SpaceInfoStep";
// import ImageUploadStep from "@/components/admin/components/spaceCreated/ImageUploadStep";
// import ConditionStep from "@/components/admin/components/spaceCreated/ConditionStep";
// import { step1ValidationSchema, step2ValidationSchema, step3ValidationSchema } from "@/components/admin/components/spaceCreated/validation/spaceValidationSchema";
// import Stepper from "@/components/admin/components/Stepper";
// import CustomButton from "@/components/global/ui/Button";
// import Colors from "@/constants/Colors";

// interface Props {}

// const Page: FC<Props> = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [completedSteps, setCompletedSteps] = useState<number[]>([]);

//   const handleNext = async () => {
//     if (currentStep === 1) {
//       try {
//         await step1ValidationSchema.validate(methods.getValues(), { abortEarly: false });
//       } catch (error) {
//         console.log('Validation Error: step - 1: ', error);
//         return;
//       }
//     } else if (currentStep === 2) {
//       try {
//         await step2ValidationSchema.validate(methods.getValues(), { abortEarly: false });
//       } catch (error) {
//         console.log('Validation Error: step - 2: ', error);
//         return;
//       }
//     } else if (currentStep === 3) {
//       try {
//         await step3ValidationSchema.validate(methods.getValues(), { abortEarly: false });
//       } catch (error) {
//         console.log('Validation Error: step - 3 ', error);
//         return;
//       }
//     }
//     setCompletedSteps((prevSteps) => [...prevSteps, currentStep]);
//     setCurrentStep((prevStep) => prevStep + 1);

//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePrev = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   const steps = [
//     <SpaceInfoStep onNext={handleNext} />,
//     <ImageUploadStep onNext={handleNext} />,
//     <ConditionStep onNext={() => console.log("Form Submitted")} />,
//   ];

//   return (
//     <CommonLayout>
//       <BackHeader Headertext="Back to" />
//       <View style={{  marginTop: 0 }}>

//         <FormProvider {...methods} >
//         <Stepper step={currentStep} completedSteps={completedSteps}/>
//           {steps[currentStep - 1]}
//           {currentStep > 1 && <CustomButton text="Previous" bg={Colors.primary} size={100} height={45}  onPress={handlePrev} />}
//         </FormProvider>
//       </View>
//     </CommonLayout>
//   );
// };

interface Props {}
interface FormValues {
  firstName: string;
  lastName: string;
  millionaire: boolean;
  money: number;
  description: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  millionaire: false,
  money: 0,
  description: "",
};
const validationSchema = object({
  firstName: mixed().required("First Name is required"),
  lastName: mixed().required("Last Name is required"),
  millionaire: mixed(),
  description: mixed(),
});

interface FormikStepProps {
  label: string;
  validationSchema: any;
  children: React.ReactNode;
}
const Page: FC<Props> = () => {
  const onSubmit = async (values: any) => {
    // Handle form submission
    console.log("Form submitted with values:", values);
  };

  const steps = [
    {
      label: "Personal Data",
      validationSchema: validationSchema,
      children: (
        <CustomInput
          label="First Name"
          icon="user"
          name="firstName"
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Full Name"
        />
      ),
    },
    {
      label: "Bank Accounts",
      validationSchema: validationSchema,
      children: (
        <CustomInput
          label="All the money I have"
          icon="money"
          name="money"
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Full Name"
        />
      ),
    },
    {
      label: "More Info",
      validationSchema: validationSchema,
      children: (
        <CustomInput
          label="Description"
          icon="description"
          name="description"
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Full Name"
        />
      ),
    },
  ];
  return (
    <>
      <CommonLayout>
        <BackHeader Headertext="Back to" />
        <FormikStepper onSubmit={onSubmit} steps={steps} />
      </CommonLayout>
    </>
  );
};
export default Page;
