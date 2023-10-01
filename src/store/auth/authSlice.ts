import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;

      state.user = action.payload;
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("token", action.payload.token);
    },
    logoutSucess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    },
    checkLogin: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logoutSucess, checkLogin } = authSlice.actions;
export default authSlice.reducer;
