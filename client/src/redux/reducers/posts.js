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
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    toggleFollower: (state, action) => {
      const follower = state.followers.find(
        (followerId) => followerId === action.payload
      );
      if (!follower) {
        state.followers = [...state.followers, action.payload];
      } else {
        state.followers = state.followers.filter(
          (followerId) => followerId !== action.payload
        );
      }
      axios
        .post("http://localhost:4000/posts/following", state.followers, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          state.posts = res.data;
        });
    },
  },
});
// Action creators are generated for each case reducer function
export const { setPosts, addPost, deletePost, toggleFollower } =
  postsSlice.actions;

export default postsSlice.reducer;
