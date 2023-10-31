import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeExercise, removeSet } from "../../actions/WorkoutActions";
import SetForm from "../SetForm/SetForm";
import Overlay from "../Overlay/Overlay";

import styles from "./Exercise.module.css";

const Exercise = ({ exercises, workoutId }) => {
  const dispatch = useDispatch();
  const [setOverlays, setSetOverlays] = useState({});

  const toggleSetOverlay = (exerciseId) => {
    setSetOverlays((prevState) => ({
      ...prevState,
      [exerciseId]: !prevState[exerciseId],
    }));
  };

  const handleDeleteExercise = async (workoutId, exercise_id) => {
    dispatch(removeExercise(workoutId, exercise_id));
  };

  const handleDeleteSet = async (set_id, workoutId, exercise_id) => {
    dispatch(removeSet(set_id, workoutId, exercise_id));
  };

  return exercises.map((exercise, i) => (
    <div key={i} className={styles.exercise}>
      <p>
        {exercise.name}{" "}
        <button
          className={styles.btn}
          onClick={() => handleDeleteExercise(workoutId, exercise.id)}
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
                onClick={() => handleDeleteSet(sets.id, workoutId, exercise.id)}
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
        className={styles.add}
        onClick={() => toggleSetOverlay(exercise.id)}
      >
        +
      </button>
      <Overlay
        isOpen={setOverlays[exercise.id]}
        onClose={() => toggleSetOverlay(exercise.id)}
      >
        {setOverlays[exercise.id] && (
          <SetForm workout_id={workoutId} exercise_id={exercise.id} />
        )}
      </Overlay>
    </div>
  ));
};

export default Exercise;
