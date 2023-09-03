import workoutService from "../api/services/workouts";

import { createSlice, current } from "@reduxjs/toolkit";

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
    deleteWorkout(state, action) {
      return state.filter((workout) => workout.id !== action.payload);
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
    const response = await workoutService.addWorkout(workout);
    dispatch(createWorkout(response));
  };
};

export const removeWorkout = (id) => {
  return async (dispatch) => {
    await workoutService.deleteWorkout(id);
    dispatch(deleteWorkout(id));
  };
};

export const { setupWorkouts, createWorkout, deleteWorkout } =
  workoutSlice.actions;
export default workoutSlice.reducer;
