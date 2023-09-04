import { useState } from "react";

import exerciseService from "../api/services/exercises";

const ExerciseForm = () => {
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = async () => {
    await exerciseService.addExercise();
    console.log(exercise, reps, load);
    setExercise("");
    setReps("");
    setLoad("");
  };

  return (
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
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default ExerciseForm;
