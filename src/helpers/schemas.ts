import { object, string, number, array, ref } from "yup";

export const signupSchema = object().shape({
  username: string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
  confirm_password: string()
    .required("Confirm Password is required")
    .oneOf([ref("password")], "Passwords must match"),
});

export const loginSchema = object().shape({
  email: string().required("Email is required").email("Invalid email format"),
  password: string().required("Password is required"),
});
