import workoutService from "../api/services/workouts";
import exerciseService from "../api/services/exercises";

import { workoutSlice } from "../reducers/workoutReducer";

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

export const removeExercise = (workout_id, exercise_id) => {
  return async (dispatch) => {
    await exerciseService.deleteExercise(workout_id, exercise_id);
    dispatch(
      deleteExercise({ workout_id: workout_id, exercise_id: exercise_id })
    );
  };
};

export const updateWorkout = (id, exercise) => {
  return async (dispatch) => {
    await exerciseService.addExercise(id, exercise);
    dispatch(updateExercise({ id: id, exercise: exercise }));
  };
};

export const {
  setupWorkouts,
  createWorkout,
  deleteWorkout,
  updateExercise,
  deleteExercise,
} = workoutSlice.actions;
