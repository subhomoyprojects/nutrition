import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerAuth = createAsyncThunk("/user/signup", async (formData) => {
  let res = await axiosInstance.post("/user/signup", formData);
  let resData = res?.data;
  return resData;
});

export const loginAuth = createAsyncThunk("/user/signin", async (formData) => {
  let res = await axiosInstance.post("/user/signin", formData);
  let resData = res?.data;
  return resData;
});

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    data: {
      full_Name: "",
      isLogin: false,
    },
    status: status.idle,
  },
  reducers: {
    logoutAuth: (state) => {
      localStorage.removeItem("token");
      state.data.full_Name = "";
      state.data.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAuth.pending, (state) => {
        state.status = status.idle;
      })
      .addCase(registerAuth.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        if (payload.status === 200) {
          toast.success(`${payload.message}`);
        } else if (payload.status === 201) {
          toast.error(`${payload.message}`);
        } else {
          toast.error("Register failed");
        }
      })
      .addCase(registerAuth.rejected, (state, { error }) => {
        state.status = status.error;
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error("Register failed");
        }
      })

      .addCase(loginAuth.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(loginAuth.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        if (payload.status === 200) {
          localStorage.setItem("token", payload.token);
          state.data.full_Name = payload.data.first_name + " " + payload.data.last_name;
          state.data.isLogin = true;
          toast.success(`${payload.message}`);
        } else {
          toast.error("Login failed");
        }
      })
      .addCase(loginAuth.rejected, (state, { error }) => {
        state.status = status.error;
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error("Login failed");
        }
      });
  },
});
export const { logoutAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
