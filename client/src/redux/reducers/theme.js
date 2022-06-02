import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: true,
    clicked: true,
    editClicked: false,
    deletePostClicked: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setClicked: (state) => {
      state.clicked = !state.clicked;
    },
    setEditClicked: (state) => {
      state.editClicked = !state.editClicked;
    },
    setDeletePostClicked: (state) => {
      state.deletePostClicked = !state.deletePostClicked;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  toggleDarkMode,
  setClicked,
  setEditClicked,
  setDeletePostClicked,
} = themeSlice.actions;

export default themeSlice.reducer;
