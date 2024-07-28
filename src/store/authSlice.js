import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { generateSessionId, clearSession } from "../components/sessionHandler";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    login: (state) => {
      const token = uuidv4();
      state.isAuthenticated = true;
      state.token = token;
      localStorage.setItem("token", token);
      generateSessionId();

      setTimeout(() => {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem("token");
        clearSession();
      }, 300000); // 5 minutes
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      clearSession();
    },
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
