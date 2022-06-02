import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: true,
    clicked: true,
    editClicked: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setClicked: (state, action) => {
      state.clicked = !state.clicked;
    },
    setEditClicked: (state, action) => {
      state.editClicked = !state.editClicked;
    },
  },
});

// Action creators are generated for each case reducer function

export const { toggleDarkMode, setClicked, setEditClicked } =
  themeSlice.actions;

export default themeSlice.reducer;
