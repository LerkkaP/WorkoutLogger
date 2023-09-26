import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeWorkout,
  removeExercise,
  removeSet,
} from "../actions/WorkoutActions";

import ExerciseForm from "./ExerciseForm";
import SetForm from "./SetForm";
import Overlay from "./Overlay";

const WorkoutList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const [hamburger, setHamburger] = useState(false);
  const [exerciseOverlays, setExerciseOverlays] = useState({});
  const [setOverlays, setSetOverlays] = useState({});

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

  const handleToggleMenu = () => {
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
    <div key={i} className="workout">
      <p>{workout.date}</p>
      <button id="dots" onClick={handleToggleMenu}>
        &#10247;
      </button>
      {hamburger && (
        <ul id="menu">
          <li>
            <button onClick={() => handleDeleteWorkout(workout.id)}>
              Delete workout
            </button>{" "}
            <button onClick={() => toggleExerciseOverlay(workout.id)}>
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
        <div key={i} className="exercise">
          <p>
            {exercise.name}{" "}
            <button
              id="deleteExercise"
              onClick={() => handleDeleteExercise(workout.id, exercise.id)}
            >
              -
            </button>
          </p>
          <div className="reps-sets-container">
            <div className="reps">
              {exercise.sets.map((sets, i) => (
                <p key={i}>
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
            <div className="sets">
              {exercise.sets.map((sets, i) => (
                <p key={i}>{sets.kg} kg</p>
              ))}
            </div>
          </div>
          <button className="add" onClick={() => toggleSetOverlay(exercise.id)}>
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
    </div>
  ));
};

export default WorkoutList;
