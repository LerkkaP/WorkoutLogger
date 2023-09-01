import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./reducers/workoutReducer";

export default configureStore({
  reducer: {
    workouts: workoutReducer,
  },
});
