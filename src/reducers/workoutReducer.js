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
    deleteWorkout(state, action) {
      return state.filter((workout) => workout.id !== action.payload);
    },
    updateExercise(state, action) {
      return state.map((workout) => {
        if (workout.id === action.payload.id.id) {
          return {
            ...workout,
            exercises: [...workout.exercises, action.payload.exercise],
          };
        }
        return workout;
      });
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

export default workoutSlice.reducer;
