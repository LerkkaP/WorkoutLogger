import { useSelector, useDispatch } from "react-redux";

import {
  removeWorkout,
  removeExercise,
  removeSet,
} from "../actions/WorkoutActions";

import ExerciseForm from "./ExerciseForm";
import SetForm from "./SetForm";

const WorkoutList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const handleDeleteWorkout = async (id) => {
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
    <div key={i}>
      <p>Date {workout.date}</p>
      <button onClick={() => handleDeleteWorkout(workout.id)}>
        Delete workout
      </button>
      {workout.exercises.map((exercise, i) => (
        <div key={i}>
          <p>{exercise.name}</p>
          <button
            onClick={() =>
              handleDeleteExercise(workout.id, exercise.exercise_id)
            }
          >
            Remove exercise
          </button>
          <p>work sets</p>
          <div className="reps">
            {exercise.sets.map((sets, i) => (
              <p key={i}>
                {sets.reps}{" "}
                <button
                  onClick={() =>
                    handleDeleteSet(
                      sets.set_id,
                      workout.id,
                      exercise.exercise_id
                    )
                  }
                >
                  -
                </button>
              </p>
            ))}
          </div>
          <SetForm workout_id={workout.id} exercise_id={exercise.exercise_id} />
          <div className="sets">
            {exercise.sets.map((sets, i) => (
              <p key={i}>{sets.kg} kg</p>
            ))}
          </div>
        </div>
      ))}
      <ExerciseForm id={workout.id} /> <hr></hr>
    </div>
  ));
};

export default WorkoutList;
