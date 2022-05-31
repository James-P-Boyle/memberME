import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: "",
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    clearProfile: (state) => {
      state.profile = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
