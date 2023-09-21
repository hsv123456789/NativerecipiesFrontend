import "./register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
type Values = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const notVisible = () => {
    setVisible(!visible);
  };
  const notVisible2 = () => {
    setVisible1(!visible1);
  };
  const initialValue: Values = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    userName: yup
      .string()
      .required("Username is required")
      .min(2, "Username is too short"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: yup
      .string()
      .required(" confirm password is required")
      .min(8, "Password is too short")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const register = (values: Values) => {
    console.log(values);
    const finalValue = {
      username: values.userName,
      password: values.password,
      email: values.email,
    };
    axios
      .post("http://localhost:3000/api/users/signup", finalValue)
      .then((data) => {
        console.log(data);
        toast.success("Registration sucessful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error.response.data.error);
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <div className="registerCard">
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={register}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="userName">First Name</label>

                <Field
                  id="userName"
                  name="userName"
                  placeholder="Enter your username"
                  className={`form-control ${
                    touched.userName && errors.userName ? "is-invalid" : ""
                  }`}
                />

                <ErrorMessage
                  name="userName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password_input">
                  <Field
                    id="password"
                    name="password"
                    type={visible ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <button onClick={notVisible}>
                    {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm Password">confirm password</label>
                <div className="password_input">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type={visible1 ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <button onClick={notVisible2}>
                    {visible1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>

                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}
