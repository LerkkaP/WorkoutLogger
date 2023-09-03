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
    deleteExercise(state, action) {
      const workoutToUpdate = state.find(
        (workout) => workout.id === action.payload.id
      );

      if (workoutToUpdate.exercises.length === 1) {
        return state.filter((workout) => workout.id !== action.payload.id);
      } else {
        workoutToUpdate.exercises = workoutToUpdate.exercises.filter(
          (exercise) => exercise.name !== action.payload.name
        );
      }

      return state;
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

export const removeExercise = (id, name) => {
  return async (dispatch) => {
    await workoutService.deleteExercise(id, name);
    dispatch(deleteExercise({ id: id, name: name }));
  };
};

export const { setupWorkouts, createWorkout, deleteWorkout, deleteExercise } =
  workoutSlice.actions;
export default workoutSlice.reducer;
