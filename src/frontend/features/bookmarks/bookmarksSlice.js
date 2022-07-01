import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToBookmarkPostsService,
  getBookmarkPostsService,
  removeFromBookmarkPostsService,
} from "../../services";

const bookmarksInitialState = {
  data: [],
  loading: false,
};

const getBookmarkPosts = createAsyncThunk(
  "bookmarks/getBookmarkPosts",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getBookmarkPostsService(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const addToBookmarkPosts = createAsyncThunk(
  "bookmarks/addToBookmarkPosts",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await addToBookmarkPostsService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const removeFromBookmarkPosts = createAsyncThunk(
  "bookmarks/removeFromBookmarkPosts",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await removeFromBookmarkPostsService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: bookmarksInitialState,
  extraReducers: {
    [getBookmarkPosts.pending]: (state) => {
      state.loading = true;
    },
    [getBookmarkPosts.fulfilled]: (state, action) => {
      state.data = action.payload.bookmarks;
      state.loading = false;
    },
    [getBookmarkPosts.rejected]: (state) => {
      state.loading = false;
    },
    [addToBookmarkPosts.fulfilled]: (state, action) => {
      state.data = action.payload.bookmarks;
      state.loading = false;
    },
    [addToBookmarkPosts.rejected]: (state) => {
      state.loading = false;
    },
    [removeFromBookmarkPosts.fulfilled]: (state, action) => {
      state.data = action.payload.bookmarks;
      state.loading = false;
    },
    [removeFromBookmarkPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const bookmarksReducer = bookmarksSlice.reducer;

export {
  getBookmarkPosts,
  addToBookmarkPosts,
  removeFromBookmarkPosts,
  bookmarksReducer,
};
