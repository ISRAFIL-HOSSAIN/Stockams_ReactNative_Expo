import * as yup from "yup";

export const signinValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is required"),
});

// use in later so don't clear it ........ 

// password: yup
// .string()
// .required('Password is required')
// .min(8, 'Password must be at least 8 characters long')
// .matches(
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
//   'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
// ),
// confirmPassword: yup
// .string()
// .required('Confirm Password is required')
// .oneOf([yup.ref('password'), null], 'Passwords must match'),