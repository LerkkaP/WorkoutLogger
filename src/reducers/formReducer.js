import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null,
  exercise: "",
  reps: "",
  load: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData(state, action) {
      return { ...state, ...action.payload };
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
