import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    success: (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload;
    },
    error: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
    },
  },
});

export default authSlice.reducer;
