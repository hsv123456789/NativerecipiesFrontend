import { Dispatch } from "redux";
import { User } from "../../models/user";
import { AppDispatch } from "../index";
import { loginSuccess, logoutSucess } from "./authSlice";
import axios from "axios";

export const loginUser = async (
  dispatch: Dispatch,
  credentials: { usernameLogin: string; passwordLogin: string }
) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/login",
      credentials
    );
    const { username, token } = response.data;
    const user = new User(username, token);
    dispatch(loginSuccess(user));
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    await axios.post("/api/logout");

    dispatch(logoutSucess());
  } catch (error) {
    console.error(error);
  }
};
