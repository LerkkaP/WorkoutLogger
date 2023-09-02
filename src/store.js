import { configureStore } from "@reduxjs/toolkit";

import workoutReducer from "./reducers/workoutReducer";
import formReducer from "./reducers/formReducer";

export default configureStore({
  reducer: {
    workouts: workoutReducer,
    form: formReducer,
  },
});
