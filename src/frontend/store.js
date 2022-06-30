import { configureStore } from "@reduxjs/toolkit";
import { authReducer, bookmarksReducer, postReducer, postsReducer, userReducer } from "./features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    post: postReducer,
    user: userReducer,
    bookmarks: bookmarksReducer,
  },
});

export { store };
