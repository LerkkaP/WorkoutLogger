import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeWorkout } from "../../actions/WorkoutActions";

import ExerciseForm from "../ExerciseForm/ExerciseForm";
import Overlay from "../Overlay/Overlay";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import Exercise from "../Exercise/Exercise";

import styles from "./Workouts.module.css";

const Workouts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const [hamburger, setHamburger] = useState(false);
  const [activeWorkout, setActiveWorkout] = useState(null);

  const [exerciseOverlays, setExerciseOverlays] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const toggleExerciseOverlay = (exerciseId) => {
    setExerciseOverlays((prevState) => ({
      ...prevState,
      [exerciseId]: !prevState[exerciseId],
    }));
  };

  const handleToggleMenu = (workoutId) => {
    setActiveWorkout(workoutId);
    setHamburger(!hamburger);
  };
  const handleDeleteWorkout = (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      dispatch(removeWorkout(id));
    }
  };

  return data.workouts.map((workout, i) => (
    <div key={i} className={styles.workout}>
      <p>{workout.date}</p>
      <button
        className={styles.dots}
        onClick={() => handleToggleMenu(workout.id)}
      >
        &#10247;
      </button>
      {hamburger && activeWorkout === workout.id && (
        <ul className={styles.menu}>
          <li className={styles.list}>
            <button
              className={styles.delete}
              onClick={() => handleDeleteWorkout(workout.id)}
            >
              Delete workout
            </button>{" "}
            <button
              className={styles.add}
              onClick={() => toggleExerciseOverlay(workout.id)}
            >
              add exercise
            </button>
            <Overlay
              isOpen={exerciseOverlays[workout.id]}
              onClose={() => toggleExerciseOverlay(workout.id)}
            >
              {exerciseOverlays[workout.id] && <ExerciseForm id={workout.id} />}
            </Overlay>
          </li>
        </ul>
      )}
      <Exercise exercises={workout.exercises} workoutId={workout.id} />
      <button className={styles.addWorkout} onClick={toggleOverlay}>
        <span className={styles.plus}>+</span>
      </button>
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <WorkoutForm />
      </Overlay>
    </div>
  ));
};

export default Workouts;
