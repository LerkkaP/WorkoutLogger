import workoutService from "../api/services/workouts";

import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: [],
  reducers: {
    setupWorkouts(state, action) {
      return action.payload;
    },
    createWorkout(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeWorkouts = () => {
  return async (dispatch) => {
    const workouts = await workoutService.getAll();
    dispatch(setupWorkouts(workouts));
  };
};

export const insertWorkout = (workout) => {
  return async (dispatch) => {
    await workoutService.addWorkout(workout);
    dispatch(createWorkout(workout));
  };
};

export const { setupWorkouts, createWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
