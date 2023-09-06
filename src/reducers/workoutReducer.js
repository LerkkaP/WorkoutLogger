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
        (workout) => workout.id === action.payload.workout_id
      );

      if (workoutToUpdate.exercises.length === 1) {
        return state.filter(
          (workout) => workout.id !== action.payload.workout_id
        );
      } else {
        workoutToUpdate.exercises = workoutToUpdate.exercises.filter(
          (e) => e.exercise_id !== action.payload.exercise_id
        );
      }

      return state;
    },
    addSet(state, action) {
      const updatedState = state.map((workout) => {
        if (workout.id === action.payload.workout_id) {
          const updatedExercises = workout.exercises.map((exercise) => {
            if (exercise.exercise_id === action.payload.exercise_id) {
              const newSet = {
                set_id: action.payload.set_id,
                reps: parseFloat(action.payload.reps),
                kg: parseFloat(action.payload.load),
              };

              const updatedSets = [...exercise.sets, newSet];

              return {
                ...exercise,
                sets: updatedSets,
              };
            }
            return exercise;
          });

          return {
            ...workout,
            exercises: updatedExercises,
          };
        }
        return workout;
      });
      return updatedState;
    },
    deleteSet(action, state) {
      console.log(state);
      /*const updatedState = state.map((workout) => {
        if (workout.id === action.payload.workout_id) {
          const updatedExercises = workout.exercises.map((exercise) => {
            if (exercise.exercise_id === action.payload.exercise_id) {
              const set = exercise.sets.filter(
                (set) => set.set_id !== action.payload.set_id
              );

              return {
                ...exercise,
                sets: set,
              };
            }
            return exercise;
          });

          return {
            ...workout,
            exercises: updatedExercises,
          };
        }
      });
      return updatedState;*/
    },
  },
});

export default workoutSlice.reducer;
