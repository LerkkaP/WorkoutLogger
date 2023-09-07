import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (exception) {
    throw new Error("There was an error in fetching the data.");
  }
};

const addWorkout = async (workout) => {
  try {
    const response = await axios.post(baseUrl, workout);
    return response.data;
  } catch (exception) {
    throw new Error("There was an error in adding a workout");
  }
};

const deleteWorkout = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (exercise) {
    throw new Error("There was an error in deleting the workout");
  }
};

export default { getAll, addWorkout, deleteWorkout };
