import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workouts",
  initialState: [],
  reducers: {
    setupWorkouts: (state, action) => action.payload,
    createWorkout: (state, action) => {
      state.push(action.payload);
    },
    deleteWorkout: (state, action) =>
      state.filter((workout) => workout.id !== action.payload),
    updateExercise: (state, action) =>
      state.map((workout) =>
        workout.id === action.payload.id
          ? {
              ...workout,
              exercises: [
                ...workout.exercises,
                action.payload.exercises[action.payload.exercises.length - 1],
              ],
            }
          : workout
      ),
    deleteExercise: (state, action) => {
      const workoutToUpdate = state.find(
        (workout) => workout.id === action.payload.workout_id
      );

      if (workoutToUpdate.exercises.length === 1) {
        return state.filter(
          (workout) => workout.id !== action.payload.workout_id
        );
      } else {
        const updatedWorkout = {
          ...workoutToUpdate,
          exercises: workoutToUpdate.exercises.filter(
            (e) => e.id !== action.payload.exercise_id
          ),
        };

        return state.map((workout) =>
          workout.id === updatedWorkout.id ? updatedWorkout : workout
        );
      }
    },
    addSet: (state, action) => {
      const { workout_id, exercise_id, reps, load, id } = action.payload;
      return state.map((workout) =>
        workout.id === workout_id
          ? {
              ...workout,
              exercises: workout.exercises.map((exercise) =>
                exercise.id === exercise_id
                  ? {
                      ...exercise,
                      sets: [
                        ...exercise.sets,
                        {
                          id,
                          reps: parseFloat(reps),
                          kg: parseFloat(load),
                        },
                      ],
                    }
                  : exercise
              ),
            }
          : workout
      );
    },
    deleteSet: (state, action) => {
      const { workout_id, exercise_id, set_id } = action.payload;

      return state.map((workout) =>
        workout.id === workout_id
          ? {
              ...workout,
              exercises: workout.exercises.map((exercise) =>
                exercise.id === exercise_id
                  ? {
                      ...exercise,
                      sets: exercise.sets.filter((set) => set.id !== set_id),
                    }
                  : exercise
              ),
            }
          : workout
      );
    },
  },
});

export default workoutSlice.reducer;
