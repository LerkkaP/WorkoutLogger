import axios from "axios";

const baseUrl = "http://localhost:3001/auth";

const register = async (userData) => {
  await axios.post(`${baseUrl}/signup`, userData);
  console.log(baseUrl);
};

const login = async (userData) => {
  const response = await axios.post(`${baseUrl}/signin`, userData);

  /*if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;*/
};

/*
const logout = () => {
  localStorage.remove("user");
};*/

export default { register, login };
