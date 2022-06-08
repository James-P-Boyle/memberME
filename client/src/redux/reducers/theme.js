import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: localStorage.getItem("darkMode") === "true",
    clicked: true,
    editClicked: false,
    mobileMenuOpen: false,
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
    setMobileMenuOpen: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function

export const { toggleDarkMode, setClicked, setEditClicked, setMobileMenuOpen } =
  themeSlice.actions;

export default themeSlice.reducer;
