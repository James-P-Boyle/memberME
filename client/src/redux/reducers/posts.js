import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      console.log("sfwwf");
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
