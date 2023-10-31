import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeWorkout,
  removeExercise,
  removeSet,
} from "../../actions/WorkoutActions";

import ExerciseForm from "../ExerciseForm/ExerciseForm";
import SetForm from "../SetForm/SetForm";
import Overlay from "../Overlay/Overlay";
import WorkoutForm from "../WorkoutForm/WorkoutForm";

import styles from "./Workouts.module.css";

const Workouts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const [hamburger, setHamburger] = useState(false);
  const [activeWorkout, setActiveWorkout] = useState(null);

  const [exerciseOverlays, setExerciseOverlays] = useState({});
  const [setOverlays, setSetOverlays] = useState({});

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

  const toggleSetOverlay = (exerciseId) => {
    setSetOverlays((prevState) => ({
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

  const handleDeleteExercise = async (workout_id, exercise_id) => {
    dispatch(removeExercise(workout_id, exercise_id));
  };

  const handleDeleteSet = async (set_id, workout_id, exercise_id) => {
    dispatch(removeSet(set_id, workout_id, exercise_id));
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
      {workout.exercises.map((exercise, i) => (
        <div key={i} className={styles.exercise}>
          <p>
            {exercise.name}{" "}
            <button
              className={styles.btn}
              onClick={() => handleDeleteExercise(workout.id, exercise.id)}
            >
              -
            </button>
          </p>
          <div className={styles.container}>
            <div>
              {exercise.sets.map((sets, i) => (
                <p key={i} className={styles.reps}>
                  {sets.reps}{" "}
                  <button
                    onClick={() =>
                      handleDeleteSet(sets.id, workout.id, exercise.id)
                    }
                  >
                    -
                  </button>
                </p>
              ))}
            </div>
            <div>
              {exercise.sets.map((sets, i) => (
                <p className={styles.sets} key={i}>
                  {sets.kg} kg
                </p>
              ))}
            </div>
          </div>
          <button
            className={styles.addExercise}
            onClick={() => toggleSetOverlay(exercise.id)}
          >
            +
          </button>
          <Overlay
            isOpen={setOverlays[exercise.id]}
            onClose={() => toggleSetOverlay(exercise.id)}
          >
            {setOverlays[exercise.id] && (
              <SetForm workout_id={workout.id} exercise_id={exercise.id} />
            )}
          </Overlay>
        </div>
      ))}
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
