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
    const response = await exerciseService.addExercise(id, exercise);
    dispatch(updateExercise(response));
  };
};

export const updateSets = (workout_id, exercise_id, reps, load) => {
  return async (dispatch) => {
    const response = await exerciseService.addSet(
      workout_id,
      exercise_id,
      reps,
      load
    );
    const lastSetId = response.exercises[0].sets.slice(-1)[0].id;
    dispatch(
      addSet({
        workout_id: workout_id,
        exercise_id: exercise_id,
        reps: reps,
        load: load,
        id: lastSetId,
      })
    );
  };
};

export const removeSet = (set_id, workout_id, exercise_id) => {
  return async (dispatch) => {
    await exerciseService.removeSet(set_id, workout_id, exercise_id);
    dispatch(
      deleteSet({
        workout_id: workout_id,
        exercise_id: exercise_id,
        set_id: set_id,
      })
    );
  };
};

export const {
  setupWorkouts,
  createWorkout,
  deleteWorkout,
  updateExercise,
  deleteExercise,
  addSet,
  deleteSet,
} = workoutSlice.actions;
