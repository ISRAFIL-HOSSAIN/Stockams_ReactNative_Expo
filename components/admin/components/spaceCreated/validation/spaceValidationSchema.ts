// spaceValidation.ts

import { object,string, mixed, number,array,boolean } from 'yup';

export const stepperValidationSchema = object({
  spaceType: string().required('Space Type is required'),
  spaceName: string().required('Space Name is required'),
  spaceSize: string().required('Space Size is required'),
  additionalInfo: string(),
  firstName: mixed().required('First Name is required'),
  lastName: mixed().required('Last Name is required'),
  millionaire: mixed(),
  description: mixed(),
});
