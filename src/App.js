import { useEffect } from "react";

import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

import { useDispatch } from "react-redux";
import { initializeWorkouts } from "./reducers/workoutReducer";

import "./style.css";

const App = () => {
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
