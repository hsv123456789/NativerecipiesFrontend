import { useState } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { loginUser } from "../store/auth/authActions";
import "./login.css";
import { useDispatch } from "react-redux";
type Values = {
  usernameLogin: string;
  passwordLogin: string;
};

export default function Login() {
  const [visiblepassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const notVisible = () => {
    setVisiblePassword(!visiblepassword);
  };
  const initialValue: Values = {
    usernameLogin: "",
    passwordLogin: "",
  };

  const validationSchema = yup.object({
    usernameLogin: yup
      .string()
      .required("Username is required")
      .min(2, "username is too short"),
    passwordLogin: yup
      .string()
      .required("password is required")
      .min(8, "passwrod is too short"),
  });
  //Random comments
  const submit = () => {
    console.error(initialValue);
    loginUser(dispatch, initialValue);
  };

  return (
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
                <label htmlFor="userName">First Name</label>

                <Field
                  id="usernameLogin"
                  name="usernameLogin"
                  placeholder="Enter your username"
                  className={`form-control ${
                    touched.usernameLogin && errors.usernameLogin
                      ? "is-invalid"
                      : ""
                  }`}
                />

                <ErrorMessage
                  name="usernameLogin"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password_input">
                  <Field
                    id="passwordLogin"
                    name="passwordLogin"
                    type={visiblepassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`form-control ${
                      touched.passwordLogin && errors.passwordLogin
                        ? "is-invalid"
                        : ""
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
                  name="passwordLogin"
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
  );
}
