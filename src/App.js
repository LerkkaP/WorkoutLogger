import { useEffect } from "react";
import { initializeWorkouts } from "./actions/WorkoutActions";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";

import "./assets/style.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeWorkouts());
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
