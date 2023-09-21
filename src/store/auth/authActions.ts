import { Dispatch } from "redux";
import { User } from "../../models/user";

import { loginSuccess, logoutSucess, checkLogin } from "./authSlice";
import axios from "axios";

export const loginUser = async (
  dispatch: Dispatch,
  credentials: { username: string; password: string }
) => {
  console.log(credentials);
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/login",
      credentials
    );
    const { username, token } = response.data;
    const user = new User(username, token);
    dispatch(loginSuccess(user));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("User not found");
    } else {
      console.log(error);
      throw error;
    }
  }
};

export const checkExistingUser = (dispatch: Dispatch) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  if (token !== null && username !== null) {
    const user = new User(username, token);
    dispatch(checkLogin(user));
  }
};

export const logoutUser = (dispatch: Dispatch) => {
  try {
    dispatch(logoutSucess());
  } catch (error) {
    console.error(error);
  }
};
