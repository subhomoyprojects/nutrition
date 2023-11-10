import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { status } from "../Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const createProduct = createAsyncThunk("/product/create", async (formData) => {
  let res = await axiosInstance.post("/product/create", formData);
  let resData = res?.data;
  return resData;
});
export const listProduct = createAsyncThunk("/product/list", async (formData) => {
  let res = await axiosInstance.post("/product/list", formData);
  let resData = res?.data;
  return resData;
});

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    items: [{}],
    status: status.idle,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.items = payload.data;
        toast.success(`${payload.message}`);
      })
      .addCase(createProduct.rejected, (state) => {
        state.status = status.error;
        toast.error(`${payload.message}`);
      })

      .addCase(listProduct.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(listProduct.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.items = payload.data;
        toast.success(`${payload.message}`);
      })
      .addCase(listProduct.rejected, (state) => {
        state.status = status.error;
        toast.error(`${payload.message}`);
      });
  },
});

export default ProductSlice.reducer;
