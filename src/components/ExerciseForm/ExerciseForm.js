import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateWorkout } from "../../actions/WorkoutActions";

import styles from "./ExerciseForm.module.css";

const ExerciseForm = (id) => {
  const dispatch = useDispatch();

  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = async (id) => {
    if (isNaN(parseFloat(reps)) || isNaN(parseFloat(load))) {
      alert("Reps and load must be valid numbers");
      return;
    }

    const exerciseObject = {
      name: exercise,
      sets: [{ reps: parseFloat(reps), kg: parseFloat(load) }],
    };
    dispatch(updateWorkout(id, exerciseObject));
    setExercise("");
    setReps("");
    setLoad("");
  };

  return (
    <div>
      <div>
        <div>
          Exercise
          <input
            className={styles.field}
            type="text"
            name="exercise"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>
        <div>
          Reps
          <input
            className={styles.field}
            type="number"
            name="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
        <div>
          Load (kg)
          <input
            className={styles.field}
            type="number"
            name="load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
        </div>
        <div>
          <button className={styles.btn} onClick={(e) => handleSubmit(id)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseForm;
