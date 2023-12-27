// components/Stepper.tsx
import React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface StepperProps {
  step: number;
  completedSteps: number[];
}

const Stepper: React.FC<StepperProps> = ({ step, completedSteps }) => {
  const animation = new Animated.Value(step);

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: step,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const stepLabels = ["Space Information", "Image", "Conditions"];

  return (
    <View style={styles.container}>
      {stepLabels.map((label, index) => (
        <View key={index} style={styles.stepContainer}>
          {index > 0 && <View style={styles.stepLine} />}
          <View
            style={[
              styles.step,
              {
                backgroundColor: completedSteps.includes(index + 1)
                  ? "white"
                  : index + 1 === step
                  ? "black"
                  : "gray",
              },
            ]}
          >
            {completedSteps.includes(index + 1) ? (
              <Ionicons name="checkmark-circle" size={35} color="green" />
            ) : (
              <Text style={styles.okSign}>{index + 1}</Text>
            )}
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "red"
  },
  stepContainer: {
    alignItems: "center",
    display : "flex", 
    justifyContent: "space-between",
    marginTop: 5,
    
  },
  stepLine: {
    flex: 1,
    height: 1,
    backgroundColor: "blue",
  },
  step: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  okSign: {
    color: "white",
    fontSize: 18,
  },
  label: {
    marginTop: 5,
    color: "black",
  },
});

export default Stepper;
