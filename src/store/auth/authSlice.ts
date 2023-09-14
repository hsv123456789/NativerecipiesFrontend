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
      localStorage.setItem("token", action.payload.gettoken());
    },
    logoutSucess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSucess } = authSlice.actions;
export default authSlice.reducer;
