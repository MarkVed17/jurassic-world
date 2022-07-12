import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostCommentService,
  createPostService,
  deletePostCommentService,
  deletePostService,
  dislikePostService,
  editPostCommentService,
  editPostService,
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

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editPostService(postId, postData, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const addPostComment = createAsyncThunk(
  "posts/addPostComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await addPostCommentService(postId, commentData, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const deletePostComment = createAsyncThunk(
  "posts/deletePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostCommentService(postId, commentId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const editPostComment = createAsyncThunk(
  "posts/editPostComment",
  async ({ postId, commentId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editPostCommentService(
        postId,
        commentId,
        commentData,
        token
      );
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
    [editPost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [addPostComment.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [addPostComment.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deletePostComment.fulfilled]: (state, action) => {
      state.data = action.payload.posts;
    },
    [editPostComment.fulfilled]: (state, action) => {
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
  editPost,
  deletePost,
  addPostComment,
  deletePostComment,
  editPostComment,
  postsReducer,
};
