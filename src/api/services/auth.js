import axios from "axios";

const baseUrl = "http://localhost:3001/users";

const register = async (userData) => {
  const response = await axios.post(baseUrl, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export default register;
