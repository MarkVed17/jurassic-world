import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUserPostsService,
  getUserService,
  editUserService,
} from "../../services";

const userInitialState = {
  profile: {
    data: null,
    loading: false,
  },
  posts: {
    data: null,
    loading: false,
  },
};

const getUser = createAsyncThunk(
  "user/getUser",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserService(username);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const getAllUserPosts = createAsyncThunk(
  "user/getAllUserPosts",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserPostsService(username);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const editUser = createAsyncThunk(
  "user/editUser",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editUserService(userData, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.profile.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.profile.loading = false;
      state.profile.data = action.payload.user;
    },
    [getUser.rejected]: (state) => {
      state.profile.loading = false;
    },
    [getAllUserPosts.pending]: (state) => {
      state.posts.loading = true;
    },
    [getAllUserPosts.fulfilled]: (state, action) => {
      state.posts.loading = false;
      state.posts.data = action.payload.posts;
    },
    [getAllUserPosts.rejected]: (state) => {
      state.posts.loading = false;
    },
    [editUser.pending]: (state) => {
      state.profile.loading = true;
    },
    [editUser.fulfilled]: (state, action) => {
      state.profile.loading = false;
      state.profile.data = action.payload.user;
    },
    [editUser.rejected]: (state) => {
      state.profile.loading = false;
    },
  },
});

const userReducer = userSlice.reducer;

export { getAllUserPosts, getUser, editUser, userReducer };
