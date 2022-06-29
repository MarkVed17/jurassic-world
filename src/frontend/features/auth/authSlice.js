import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  JURASSIC_WORLD_AUTH_TOKEN,
  JURASSIC_WORLD_USER_INFO,
} from "../../constants";
import { signInService, signUpService } from "../../services";

const authInitialState = {
  token: localStorage.getItem(JURASSIC_WORLD_AUTH_TOKEN),
  user: JSON.parse(localStorage.getItem(JURASSIC_WORLD_USER_INFO)),
  loading: false,
  isAuth:
    localStorage.getItem(JURASSIC_WORLD_AUTH_TOKEN) !== null ? true : false,
};

const signin = createAsyncThunk(
  "auth/signin",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signInService(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signUpService(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    signout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true;
      state.isAuth = false;
    },
    [signin.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      state.loading = false;
      state.isAuth = true;
    },
    [signin.rejected]: (state) => {
      state.loading = false;
      state.isAuth = false;
    },
    [signup.pending]: (state) => {
      state.loading = true;
      state.isAuth = false;
    },
    [signup.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      state.loading = false;
      state.isAuth = true;
    },
    [signup.rejected]: (state) => {
      state.loading = false;
      state.isAuth = false;
    },
  },
});

const { signout } = authSlice.actions;

const authReducer = authSlice.reducer;

export { signin, signup, signout, authReducer };
