import { createSlice } from "@reduxjs/toolkit";

export const inviteSlice = createSlice({
  name: "invite",
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
export const { setClicked } = inviteSlice.actions;

export default inviteSlice.reducer;
