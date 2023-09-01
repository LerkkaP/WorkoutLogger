import workoutService from "../api/services/workouts";

import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: [],
  reducers: {
    setupWorkouts(state, action) {
      return action.payload;
    },
  },
});

export const initializeWorkouts = () => {
  return async (dispatch) => {
    const workouts = await workoutService.getAll();
    dispatch(setupWorkouts(workouts));
  };
};

export const fetchExercises = () => {
  return async (dispatch) => {};
};

export const { setupWorkouts } = workoutSlice.actions;
export default workoutSlice.reducer;
