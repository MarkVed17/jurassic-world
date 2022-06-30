import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostService,
  dislikePostService,
  getAllPostsService,
  likePostService,
} from "../../services";

const postsInitialState = {
  data: [],
  loading: false,
  error: "",
};

const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsService();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await createPostService(postData, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const dislikePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
      state.loading = false;
    },
    [getAllPosts.rejected]: (state) => {
      state.loading = false;
    },
    [createPost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [createPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [likePost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
  },
});

const postsReducer = postsSlice.reducer;

export {
  getAllPosts,
  createPost,
  likePost,
  dislikePost,
  postsReducer,
};
