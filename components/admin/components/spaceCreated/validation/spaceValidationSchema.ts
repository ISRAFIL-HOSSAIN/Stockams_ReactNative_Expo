// spaceValidation.ts
import { object, string, array, boolean } from 'yup';

export const step1ValidationSchema = object().shape({
  spaceType: string().required('Space Type is required'),
  spaceName: string().required('Space Name is required'),
  spaceSize: string().required('Space Size is required'),
  additionalInfo: string(),
});

export const step2ValidationSchema = object().shape({
  images: array().min(1, 'Upload at least 1 image').max(5, 'Maximum of 5 images'),
});

export const step3ValidationSchema = object().shape({
  additionalNote: string(),
  unloading: boolean().oneOf([true], 'Please select Unloading'),
  storageConditions: boolean().oneOf([true], 'Please select Storage Conditions'),
});
