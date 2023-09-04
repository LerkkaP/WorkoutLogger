import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

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

const addExercise = async (id, exerciseObject) => {
  const response = await axios.get(`${baseUrl}/${id.id}`);
  const existingWorkout = response.data;
  existingWorkout.exercises.push(exerciseObject);

  await axios.put(`${baseUrl}/${id.id}`, existingWorkout);
};

export default { deleteExercise, addExercise };
