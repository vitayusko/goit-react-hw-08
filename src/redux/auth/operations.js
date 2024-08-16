import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearToken, goitAPI, setToken } from "../../config/goitAPI";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("/users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk("logOut", async (_, thunkAPI) => {
  try {
    const { data } = await goitAPI.post("/users/logout");
    clearToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
//   try {
//     const { data } = await goitAPI.post("/users/current");
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
