import * as yup from "yup";

export const signupValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Password is required"),
  name:yup.string().required("Full Name is required"),
  phone:yup.string().required("Phone Number is required"),
  dob:yup.string().required("DOB is required"), 
//   terms:yup.bool().required("Terms are required"),
});