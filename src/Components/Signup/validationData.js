import * as Yup from "yup";
const validationData = {
  first_name: Yup.string()
    .min(3, "Atleast 3 character Required")
    .max(15, "Must be 15 characters or less")
    .required("First Name Required")
    .matches(
      /^(?=.*[A-Za-z])/,
      "Only uppercase and lowercase character allowed"
    ),
  last_name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last Name Required")
    .matches(
      /^(?=.*[A-Za-z])/,
      "Only uppercase and lowercase character allowed"
    ),
  username: Yup.string().required("username Required"),
  email: Yup.string().email().required("Email is required"),
  password1: Yup.string()
    .required("Please enter a password")
    .min(8, "Password too short")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1"), null], "Passwords must match")
    .required("Password confirm is required"),
  phone_number: Yup.string()
    .required("Phone Number Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10, "too short")
    .max(10, "too long"),
};
export { validationData };
