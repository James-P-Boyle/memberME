import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: true,
    clicked: true,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setClicked: (state, action) => {
      state.clicked = !state.clicked;
    },
  },
});

// Action creators are generated for each case reducer function

export const { toggleDarkMode, setClicked } = themeSlice.actions;

export default themeSlice.reducer;
