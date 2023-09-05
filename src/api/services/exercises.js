import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

const deleteExercise = async (workout_id, exercise_id) => {
  const response = await axios.get(`${baseUrl}/${workout_id}`);

  const workouts = response.data;

  workouts.exercises = workouts.exercises.filter(
    (e) => e.exercise_id !== exercise_id
  );

  if (workouts.exercises.length === 0) {
    await axios.delete(`${baseUrl}/${workout_id}`);
  } else {
    await axios.put(`${baseUrl}/${workout_id}`, workouts);
  }
};

const addExercise = async (id, exerciseObject) => {
  const response = await axios.get(`${baseUrl}/${id.id}`);
  const existingWorkout = response.data;
  existingWorkout.exercises.push(exerciseObject);

  await axios.put(`${baseUrl}/${id.id}`, existingWorkout);
};

export default { deleteExercise, addExercise };
