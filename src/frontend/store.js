import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, postsReducer, userReducer } from "./features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    post: postReducer,
    user: userReducer,
  },
});

export { store };
