// import { View, Text, Button } from "react-native";
// import React, { FC, useState } from "react";


// import CommonLayout from "@/components/layout/CommonLayout";
// import BackHeader from "@/components/global/header/BackHeader";
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

// export default Page;
