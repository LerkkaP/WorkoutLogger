import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addWorkout = async (workout) => {
  const response = await axios.post(baseUrl, workout);
  return response.data;
};

const deleteWorkout = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const deleteExercise = async (id, name) => {
  const response = await axios.get(`${baseUrl}/${id}`);

  const workouts = response.data;

  workouts.exercises = workouts.exercises.filter(
    (exercise) => exercise.name !== name
  );

  if (workouts.exercises.length === 0) {
    await axios.delete(`${baseUrl}/${id}`);
  } else {
    await axios.put(`${baseUrl}/${id}`, workouts);
  }
};

export default { getAll, addWorkout, deleteWorkout, deleteExercise };
