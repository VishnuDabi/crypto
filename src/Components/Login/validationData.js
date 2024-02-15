import * as Yup from "yup";
const validationData = {
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Please enter a password"),
  // .min(8, "Password too short")
  // .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
  // .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
  // .matches(/^(?=.*[0-9])/, "Must contain at least one number")
  // .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
};
export { validationData };
