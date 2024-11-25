import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import postsReducer from "./features/posts/postsSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: userReducer,
  },
});
