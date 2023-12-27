declare module "react-native-progress-steps" {
  import { ReactNode } from "react";

  interface Step {
    label: string;
    content: ReactNode;
  }
  interface ProgressSteps{
    
  }
  interface ProgressStep{
   
  }

  export interface StepperProps {
    steps: Step[];
    activeStep: number;
    ProgressSteps?: ProgressSteps;
    ProgressStep?: ProgressStep;
  }

  export class Stepper extends React.Component<StepperProps> {}

 
}
