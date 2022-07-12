import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  followUserService,
  getAllUsersService,
  unfollowUserService,
} from "../../services";

const usersInitialState = {
  data: [],
  loading: false,
};

const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsersService(username);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await followUserService(followUserId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await unfollowUserService(followUserId, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.users;
    },
    [getAllUsers.rejected]: (state) => {
      state.loading = false;
    },
    [followUser.fulfilled]: (state, action) => {
      state.data = action.payload.users;
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.data = action.payload.users;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

const usersReducer = usersSlice.reducer;

export { getAllUsers, followUser, unfollowUser, usersReducer };
