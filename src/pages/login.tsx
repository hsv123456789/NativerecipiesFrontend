import { useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { loginUser } from "../store/auth/authActions";
import "./login.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

type Values = {
  username: string; // Changed from usernameLogin
  password: string; // Changed from passwordLogin
};

export default function Login() {
  const [visiblepassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const notVisible = () => {
    setVisiblePassword(!visiblepassword);
  };

  const initialValue: Values = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(2, "Username is too short"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short"),
  });

  const submit = async (values: Values) => {
    console.log(values);
    try {
      await loginUser(dispatch, {
        username: values.username,
        password: values.password,
      });
    } catch (err) {
      console.log("The error catched from login login page" + err);
    }
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <div className="loginCard">
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>{" "}
                  <Field
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    className={`form-control ${
                      touched.username && errors.username ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="username"
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
                      type={visiblepassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <button onClick={notVisible}>
                      {visiblepassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <button type="submit" className="">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
