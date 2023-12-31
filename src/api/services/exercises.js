import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

const deleteExercise = async (workout_id, exercise_id) => {
  try {
    await axios.delete(
      `http://localhost:3001/workouts/${workout_id}/exercises/${exercise_id}`
    );
  } catch (exception) {
    throw new Error("There was an error in deleting the exercise.");
  }
};

const addExercise = async (id, exerciseObject) => {
  try {
    const response = await axios.post(
      `${baseUrl}/${id.id}/exercises`,
      exerciseObject
    );
    return response.data;
  } catch (exception) {
    throw new Error("There was an error in adding the exercise.");
  }
};

const addSet = async (workout_id, exercise_id, reps, load) => {
  try {
    const response = await axios.put(
      `${baseUrl}/${workout_id}/exercises/${exercise_id}/sets`,
      {
        reps,
        load,
      }
    );
    return response.data;
  } catch (exception) {
    throw new Error("There was an error in adding the set.");
  }
};

const removeSet = async (set_id, workout_id, exercise_id) => {
  try {
    await axios.delete(
      `${baseUrl}/${workout_id}/exercises/${exercise_id}/sets/${set_id}`
    );
  } catch (exception) {
    throw new Error("There was an error in removing the set.");
  }
};

export default { deleteExercise, addExercise, addSet, removeSet };
