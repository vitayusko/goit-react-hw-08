import { createSlice } from "@reduxjs/toolkit";
import {
  getMeThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;

        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(logOutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(getMeThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(getMeThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
