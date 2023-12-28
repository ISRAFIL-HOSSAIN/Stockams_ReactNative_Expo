// // components/AdditionalInfoStep.tsx
// import React from 'react';
// import { useFormContext } from 'react-hook-form';
// import { Button, Text, View, TextInput } from 'react-native';
// import Checkbox from 'expo-checkbox';
// import { step3ValidationSchema } from './validation/spaceValidationSchema';
// type StepProps = {
//   onNext: () => void;
// };

// const ConditionStep: React.FC<StepProps> = ({ onNext }) => {
//   const methods = useFormContext();

//   const onSubmit = async () => {
//     try {
//       await step3ValidationSchema.validate(methods.getValues(), { abortEarly: false });
//       console.log('Form data:', methods.getValues());
//       onNext();
//     } catch (error) {
//       console.log('Validation Error:', error);
//     }
//   };

//   return (
//     <View>
//       <Text>Additional Information</Text>
//       <TextInput
//         placeholder="Additional Note"
//         onChangeText={(text) => methods.setValue('additionalNote', text)}
//       />
//       <Checkbox
//         value={methods.watch('unloading')}
//         onValueChange={(value:any) => methods.setValue('unloading', value)}
//       />
//       <Text>Unloading</Text>
//       <Checkbox
//         value={methods.watch('storageConditions')}
//         onValueChange={(value:any) => methods.setValue('storageConditions', value)}
//       />
//       <Text>Storage Conditions</Text>
//       <Button title="Submit" onPress={methods.handleSubmit(onSubmit)} />
//     </View>
//   );
// };

// export default ConditionStep;
