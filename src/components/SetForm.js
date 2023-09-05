import { useState } from "react";
import { useDispatch } from "react-redux";

import exerciseService from "../api/services/exercises";

const SetForm = ({ workout_id, exercise_id }) => {
  const dispatch = useDispatch();

  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = async () => {
    await exerciseService.addSet(workout_id, exercise_id, reps, load);
    setReps("");
    setLoad("");
  };

  return (
    <div>
      Reps
      <input
        type="number"
        name="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      Load (kg)
      <input
        type="number"
        name="load"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <button onClick={handleSubmit}>Add set</button>
    </div>
  );
};

export default SetForm;
