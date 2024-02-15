import React, { useState } from "react";
import "./login.css";
import "../Signup/signup.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { validationData } from "./validationData";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const values = {
    email: "",
    password: "",
  };

  const handleLoginData = async (data) => {
    setErrorMsg("");
    try {
      console.log({ ...data });
      let response = await axios.post(
        "http://192.168.0.241:8000/user/api/login/",
        {
          ...data,
        }
      );
      console.log(response);

      if (response.data.status === 200) {
        navigate("/");
      } else if (response.data.status === 406) {
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup__container">
      <div className="signup__form">
        <h3 className="txt__center text-info">Login </h3>
        <Formik
          initialValues={values}
          validationSchema={Yup.object(validationData)}
          onSubmit={(values, { setSubmitting }) => {
            let data = {};
            data = values;
            handleLoginData(data);
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <form
              className="my__signup d-flex flex-column"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text__danger">{formik.errors.email}</div>
              ) : null}
              <label htmlFor="password">Password</label>
              <div className="pwd-eye">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...formik.getFieldProps("password")}
                />
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

              {formik.touched.password && formik.errors.password ? (
                <div className="text__danger">{formik.errors.password}</div>
              ) : null}
              {errorMsg ? <div className="text__danger">{errorMsg}</div> : null}

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to="/signin" className="btn mt-1 text-center">
                <i> Don't have an account, Signup</i>
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
