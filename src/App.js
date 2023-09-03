import axios from "axios";
import { useEffect } from "react";

import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

import { useDispatch } from "react-redux";

import { initializeWorkouts } from "./actions/WorkoutActions";

import "./style.css";

const App = () => {
  const dispatch = useDispatch();

  const config = {
    headers: {
      "X-Api-Key": process.env.REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    /*axios
      .get("https://api.api-ninjas.com/v1/exercises?name=squat", config)
      .then((response) => console.log(response.data));*/
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
