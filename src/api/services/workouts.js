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

  const workout = response.data.exercises.filter((item) => item.name !== name);

  const f = await axios.put(`${baseUrl}/${id}`, workout);

  return f;
  //console.log(response.data.find((workout) => workout.id === id));//

  /*const workout = response.data.find((workout) => workout.id === id);

  workout.exercises = workout.exercises.filter(
    (exercise) => exercise.name !== name
  );

  await axios.put(`${baseUrl}/${id}`, workout);*/

  /*const response = await axios.get(baseUrl);
  /*console.log(
    response.data.map((item) =>
      item.exercises.filter((exercise) => exercise.name !== name)
    )
  );*/
  /*return response.data.map((item) =>
    item.exercises.filter((exercise) => exercise.name !== name)
  );*/
};

export default { getAll, addWorkout, deleteWorkout, deleteExercise };
