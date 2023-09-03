import { useSelector, useDispatch } from "react-redux";

import { removeWorkout } from "../reducers/workoutReducer";

import workoutService from "../api/services/workouts";

const WorkoutList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const handleDeleteWorkout = async (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      dispatch(removeWorkout(id));
    }
  };

  const handleDeleteExercise = async (id, exercise) => {
    await workoutService.deleteExercise(id, exercise);
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
            onClick={() => handleDeleteExercise(workout.id, exercise.name)}
          >
            Remove exercise
          </button>
          <p>work sets</p>
          <div className="reps">
            {exercise.sets.map((sets, i) => (
              <p key={i}>{sets.reps}</p>
            ))}
          </div>
          <div className="sets">
            {exercise.sets.map((sets, i) => (
              <p key={i}>{sets.kg} kg</p>
            ))}
          </div>
        </div>
      ))}
      <hr></hr>
    </div>
  ));
};

export default WorkoutList;
