// FormikStepper.tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Formik } from 'formik';

interface FormikStepperProps {
  onSubmit: (values: any) => Promise<void>;
  steps: {
    label: string;
    validationSchema: any;
    children: React.ReactNode;
  }[];
}

const FormikStepper: React.FC<FormikStepperProps> = ({ onSubmit, steps }) => {
  const [step, setStep] = useState(0);

  const isLastStep = () => step === steps.length - 1;

  return (
    <Formik
      initialValues={{}}
      validationSchema={steps[step].validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await onSubmit(values);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <View>
          {steps[step].children}
          <Button
            title={isLastStep() ? 'Submit' : 'Next'}
            onPress={() => (isLastStep() ? undefined : setStep((s) => s + 1))}
            disabled={isSubmitting}
          />
        </View>
      )}
    </Formik>
  );
};

export default FormikStepper;
