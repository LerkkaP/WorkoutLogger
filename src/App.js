import { useEffect } from "react";

import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

import { useSelector, useDispatch } from "react-redux";
import { initializeWorkouts } from "./reducers/workoutReducer";

const App = () => {
  const workouts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeWorkouts());
  }, []);

  return (
    <div>
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
};

export default App;
