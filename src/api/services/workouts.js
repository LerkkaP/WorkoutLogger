import axios from "axios";

const baseUrl = "http://localhost:3001/workouts";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addWorkout = async (workout) => {
  const response = await axios.post(baseUrl, workout);
};

export default { getAll };
