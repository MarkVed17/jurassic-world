import { configureStore } from "@reduxjs/toolkit";
import { authReducer, bookmarksReducer, filtersReducer, postReducer, postsReducer, userReducer, usersReducer } from "./features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    post: postReducer,
    user: userReducer,
    bookmarks: bookmarksReducer,
    users: usersReducer,
    filters: filtersReducer,
  },
});

export { store };
