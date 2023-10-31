import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateSets } from "../../actions/WorkoutActions";

import styles from "./SetForm.module.css";

const SetForm = ({ workout_id, exercise_id }) => {
  const dispatch = useDispatch();

  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = async () => {
    if (isNaN(parseFloat(reps)) || isNaN(parseFloat(load))) {
      alert("Reps and load must be valid numbers");
      return;
    }
    dispatch(updateSets(workout_id, exercise_id, reps, load));
    setReps("");
    setLoad("");
  };

  return (
    <div>
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
        <button className={styles.btn} onClick={handleSubmit}>
          Add set
        </button>
      </div>
    </div>
  );
};

export default SetForm;
