import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    clicked: true,
  },
  reducers: {
    setClicked: (state, action) => {
      //toggle true or false
      state.clicked = !state.clicked;
      console.log("clicked", action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClicked } = themeSlice.actions;

export default themeSlice.reducer;
