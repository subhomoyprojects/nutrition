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
export const removeProduct = createAsyncThunk("/product/remove", async (productId) => {
  let res = await axiosInstance.post("/product/remove", productId);
  let resData = res?.data;
  return resData;
});
export const updateProduct = createAsyncThunk("/product/update", async (formData) => {
  let res = await axiosInstance.post("/product/update", formData);
  let resData = res?.data;
  return resData;
});

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    items: [],
    status: status.idle,
    isDelete: false,
    totalPage: null,
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.items = payload?.data;
        toast.success(`${payload.message}`);
      })
      .addCase(createProduct.rejected, (state, { error }) => {
        state.status = status.error;
        toast.error(`${error.message}`);
      })

      .addCase(listProduct.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(listProduct.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.items = payload?.data;
        state.totalPage = payload?.totalPages;
        state.page = payload?.currentPage;
        toast.success(`${payload.message}`);
      })
      .addCase(listProduct.rejected, (state, { error }) => {
        state.status = status.error;
        toast.error(`${error.message}`);
      })

      .addCase(removeProduct.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        state.items = state.items.filter((item) => item._id !== payload?.data);
        toast.success(`${payload.message}`);
      })
      .addCase(removeProduct.rejected, (state, { error }) => {
        state.status = status.error;
        toast.error(`${error.message}`);
      })

      .addCase(updateProduct.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.status = status.idle;
        localStorage.setItem("title", payload?.data?.title);
        toast.success(`${payload.message}`);
      })
      .addCase(updateProduct.rejected, (state, { error }) => {
        state.status = status.error;
        toast.error(`${error.message}`);
      });
  },
});
export const { deleteProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
