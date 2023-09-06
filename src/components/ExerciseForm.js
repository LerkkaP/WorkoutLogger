import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateWorkout } from "../actions/WorkoutActions";

import { v4 as uuidv4 } from "uuid";

const ExerciseForm = (id) => {
  const dispatch = useDispatch();

  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const [show, toggleShow] = useState(false);

  const handleSubmit = async (id) => {
    const exerciseObject = {
      exercise_id: uuidv4(),
      name: exercise,
      sets: [
        { set_id: uuidv4(4), reps: parseFloat(reps), kg: parseFloat(load) },
      ],
    };

    dispatch(updateWorkout(id, exerciseObject));
    setExercise("");
    setReps("");
    setLoad("");
  };

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        {show ? "Hide" : "Edit"}
      </button>
      {show && (
        <div>
          Exercise
          <input
            type="text"
            name="exercise"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
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
          <button onClick={(e) => handleSubmit(id)}>Add</button>
        </div>
      )}
    </div>
  );
};

export default ExerciseForm;
