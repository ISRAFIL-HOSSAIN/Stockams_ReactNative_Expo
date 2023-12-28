// // components/ImageUploadStep.tsx
// import React from "react";
// import { useFormContext } from "react-hook-form";
// import { Button, Text, View, Image } from "react-native";
// import * as DocumentPicker from "expo-document-picker";
// import { step2ValidationSchema } from "./validation/spaceValidationSchema";
// type StepProps = {
//   onNext: () => void;
// };

// const ImageUploadStep: React.FC<StepProps> = ({ onNext }) => {
//   const methods = useFormContext();

//   //   const handleImageUpload = async () => {
//   //     try {
//   //       const result = await DocumentPicker.pickMultiple({
//   //         type: [DocumentPicker.types.images],
//   //       });

//   //       const imagePaths = result.map((image:any) => image.uri);
//   //       methods.setValue('images', imagePaths);
//   //     } catch (err) {
//   //       console.log('Error picking images:', err);
//   //     }
//   //   };

//   const onSubmit = async () => {
//     try {
//       await step2ValidationSchema.validate(methods.getValues(), {
//         abortEarly: false,
//       });
//       onNext();
//     } catch (error) {
//       console.log("Validation Error:", error);
//     }
//   };
//   return (
//     <View>
//       <Text>Upload Images</Text>
//       {/* <Button title="Select Images" onPress={handleImageUpload} /> */}
//       {methods.watch("images") &&
//         methods
//           .watch("images")
//           .map((image: any, index: any) => (
//             <Image
//               key={index}
//               source={{ uri: image }}
//               style={{ width: 100, height: 100 }}
//             />
//           ))}
//       <Button title="Next" onPress={onSubmit} />
//     </View>
//   );
// };

// export default ImageUploadStep;
