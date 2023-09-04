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

const addExercise = async () => {
  await axios.put(`${baseUrl}/${1}`, {
    name: "Squat",
    sets: [
      {
        reps: 5,
        kg: 58.75,
      },
      {
        reps: 5,
        kg: 58.75,
      },
      {
        reps: 7,
        kg: 58.75,
      },
    ],
  });
};

export default { deleteExercise, addExercise };
