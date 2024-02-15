import React, { useState } from "react";
import "./signup.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { validationData } from "./validationData";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
const Signup = () => {
  const [emailExist, setEmailExist] = useState(null);
  const [usernameExist, setUsernameExist] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const values = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number: "",
    password1: "",
    password2: "",
  };
  const handleSubmitData = async (userData) => {
    // console.log(userData);
    setEmailExist("");
    setUsernameExist("");
    try {
      const response = await axios.post(
        "http://192.168.0.241:8000/user/api/signup/",
        { ...userData }
      );
      if (response.status === 200) {
        alert("sucessfully submited");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
      try {
        if (error.response.data.serializer_errors.email) {
          setEmailExist("Email Id Already taken by another User");
        } else if (error.response.data.serializer_errors.username) {
          setUsernameExist("A user with that username already exists.");
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="signup__container">
        <div className="signup__form ">
          <h3 className="text-center text-info">Signup Form</h3>
          <Formik
            initialValues={values}
            validationSchema={Yup.object(validationData)}
            onSubmit={(values, { setSubmitting }) => {
              let data = values;
              handleSubmitData(data);
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <form
                className="my__signup d-flex flex-column"
                onSubmit={formik.handleSubmit}
              >
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  {...formik.getFieldProps("first_name")}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <div className="text__danger ">
                    {formik.errors.first_name}
                  </div>
                ) : null}

                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  {...formik.getFieldProps("last_name")}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <div className="text__danger ">{formik.errors.last_name}</div>
                ) : null}
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text__danger ">{formik.errors.username}</div>
                ) : null}
                {usernameExist ? (
                  <div className="text__danger">{usernameExist}</div>
                ) : (
                  ""
                )}
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text__danger ">{formik.errors.email}</div>
                ) : null}
                {emailExist ? (
                  <div className="text__danger">{emailExist}</div>
                ) : (
                  ""
                )}
                <label htmlFor="password">Password</label>
                <div className="pwd-eye">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...formik.getFieldProps("password1")}
                  />
                  {formik.touched.password1 && formik.errors.password1 ? (
                    <div className="text__danger ">
                      {formik.errors.password1}
                    </div>
                  ) : null}
                  {showPassword ? (
                    <span className="eye-container">
                      <FaEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                        className="eye-icon"
                      />
                    </span>
                  ) : (
                    <span className="eye-container">
                      <FaRegEye
                        onClick={() => setShowPassword(!showPassword)}
                        className="eye-icon"
                      />
                    </span>
                  )}
                </div>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="pwd-eye">
                  <input
                    id="confirmPassword"
                    type={showPassword1 ? "text" : "password"}
                    {...formik.getFieldProps("password2")}
                  />
                  {showPassword1 ? (
                    <span className="eye-container">
                      <FaEyeSlash
                        onClick={() => setShowPassword1(!showPassword1)}
                        className="eye-icon"
                      />
                    </span>
                  ) : (
                    <span className="eye-container">
                      <FaRegEye
                        onClick={() => setShowPassword1(!showPassword1)}
                        className="eye-icon"
                      />
                    </span>
                  )}
                </div>
                {formik.touched.password2 && formik.errors.password2 ? (
                  <div className="text__danger ">{formik.errors.password2}</div>
                ) : null}
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  type="text"
                  {...formik.getFieldProps("phone_number")}
                />
                {formik.touched.phone_number && formik.errors.phone_number ? (
                  <div className="text__danger ">
                    {formik.errors.phone_number}
                  </div>
                ) : null}

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/login" className="btn mt-1 text-center">
                  <i> Already have an account, Signin</i>
                </Link>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
