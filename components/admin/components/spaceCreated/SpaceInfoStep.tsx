// components/SpaceInfoStep.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Button, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { step1ValidationSchema } from "./validation/spaceValidationSchema";
import CustomButton from "@/components/global/ui/Button";
import Colors from "@/constants/Colors";
import CustomInput from "@/components/global/ui/CommonInput";

type StepProps = {
  onNext: () => void;
};

const SpaceInfoStep: React.FC<StepProps> = ({ onNext }) => {
  const methods = useFormContext();

  const onSubmit = async (data: any) => {
    try {
      await step1ValidationSchema.validate(data, { abortEarly: false });
      methods.setValue("spaceType", data.spaceType);
      methods.setValue("spaceName", data.spaceName);
      methods.setValue("spaceSize", data.spaceSize);
      methods.setValue("additionalInfo", data.additionalInfo);
      onNext();
    } catch (error) {
      console.log("Validation Error:", error);
    }
  };

  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <View>
      <Text>Space Information</Text>
      <Picker
        selectedValue={methods.watch("spaceType")}
        onValueChange={(value: any) => methods.setValue("spaceType", value)}
      >
        <Picker.Item label="Select Space Type" value="" />
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
      </Picker>
      <CustomInput
        type="dropdown"
        label="Select an option"
        options={dropdownOptions}
        PlaceHolder="Select an options"
      />
      <TextInput
        placeholder="Space Name"
        onChangeText={(text) => methods.setValue("spaceName", text)}
      />
      <TextInput
        placeholder="Space Size"
        onChangeText={(text) => methods.setValue("spaceSize", text)}
      />
      <TextInput
        placeholder="Additional Information"
        onChangeText={(text) => methods.setValue("additionalInfo", text)}
      />
      {/* <Button title="Next" onPress={methods.handleSubmit(onSubmit)} /> */}
      <View className="flex flex-row justify-end ">
        <CustomButton
          text="Next"
          bg={Colors.primary}
          size={100}
          height={45}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default SpaceInfoStep;
