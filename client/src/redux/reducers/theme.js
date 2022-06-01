import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: true,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
