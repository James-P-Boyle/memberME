import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import postsReducer from "./reducers/posts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
