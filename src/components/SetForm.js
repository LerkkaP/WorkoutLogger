import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateSets } from "../actions/WorkoutActions";

const SetForm = ({ workout_id, exercise_id }) => {
  const dispatch = useDispatch();

  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = async () => {
    dispatch(updateSets(workout_id, exercise_id, reps, load));
    setReps("");
    setLoad("");
  };

  return (
    <div>
      <div>
        Reps
        <input
          type="number"
          name="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      <div>
        Load (kg)
        <input
          type="number"
          name="load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Add set</button>
      </div>
    </div>
  );
};

export default SetForm;
