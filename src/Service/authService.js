import api from "./api";

const register = async (data) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

const login = async (data) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};
const getMe = async (userId) => {

  const response = await api.get(
    "/auth/me",
    {
      params: {
        userId: userId
      }
    }
  );

  return response.data;
};

export default {
  register,
  login,
  getMe
};