import { useEffect } from "react";
import { useState } from "react";
import { initializeWorkouts } from "./actions/WorkoutActions";
import { useDispatch } from "react-redux";

import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Overlay from "./components/Overlay";

import "./assets/style.css";

const App = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(initializeWorkouts());
  }, []);

  return (
    <div>
      <button onClick={toggleOverlay}>Add workout</button>
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <WorkoutForm />
      </Overlay>
      <WorkoutList />
    </div>
  );
};

export default App;
