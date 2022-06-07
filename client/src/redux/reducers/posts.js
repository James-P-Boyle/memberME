import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    followers: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          console.log("found");
          return action.payload;
        }
        return post;
      });
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setPosts, addPost, deletePost, setFollowers, updatePost } =
  postsSlice.actions;

export default postsSlice.reducer;
