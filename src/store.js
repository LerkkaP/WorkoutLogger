import { configureStore } from "@reduxjs/toolkit";

import workoutReducer from "./reducers/workoutReducer";
import formReducer from "./reducers/formReducer";
import authReducer from "./reducers/authReducer";

export default configureStore({
  reducer: {
    workouts: workoutReducer,
    form: formReducer,
    auth: authReducer,
  },
});
