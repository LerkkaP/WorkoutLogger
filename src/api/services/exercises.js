import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

const deleteExercise = async (workout_id, exercise_id) => {
  try {
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
  } catch (exception) {
    throw new Error("There was an error in deleting the exercise.");
  }
};

const addExercise = async (id, exerciseObject) => {
  try {
    const response = await axios.get(`${baseUrl}/${id.id}`);
    const existingWorkout = response.data;
    existingWorkout.exercises.push(exerciseObject);

    await axios.put(`${baseUrl}/${id.id}`, existingWorkout);
  } catch (exception) {
    throw new Error("There was an error in adding the exercise.");
  }
};

const addSet = async (workout_id, exercise_id, set_id, reps, load) => {
  try {
    const response = await axios.get(`${baseUrl}/${workout_id}`);
    const workouts = response.data;

    const exercise = workouts.exercises.find(
      (e) => e.exercise_id === exercise_id
    );

    const newSet = {
      set_id: set_id,
      reps: parseFloat(reps),
      kg: parseFloat(load),
    };

    exercise.sets.push(newSet);

    await axios.put(`${baseUrl}/${workout_id}`, workouts);
  } catch (exception) {
    throw new Error("There was an error in adding the set.");
  }
};

const removeSet = async (set_id, workout_id, exercise_id) => {
  try {
    const response = await axios.get(`${baseUrl}/${workout_id}`);

    const workouts = response.data;

    const exercise = workouts.exercises.find(
      (e) => e.exercise_id === exercise_id
    );

    const set = exercise.sets.filter((set) => set.set_id !== set_id);

    exercise.sets = set;

    await axios.put(`${baseUrl}/${workout_id}`, workouts);
  } catch (error) {
    throw new Error("There was an error in removing the set.");
  }
};

export default { deleteExercise, addExercise, addSet, removeSet };
