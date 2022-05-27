import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("token") ? true : false,

    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    user: {},
  },
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate, logout } = authSlice.actions;

export default authSlice.reducer;
