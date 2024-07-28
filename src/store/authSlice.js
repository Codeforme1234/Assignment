import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { generateSessionId, clearSession } from "../components/sessionHandler";

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      const token = uuidv4();
      state.isAuthenticated = true;
      state.token = token;
      localStorage.setItem("token", token);
      generateSessionId();

      // Set token expiration (5 minutes)
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
      localStorage.removeItem("token");
      clearSession();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
