import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import postsReducer from "./reducers/posts";
import inviteReducer from "./reducers/invite";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    invite: inviteReducer,
  },
});
