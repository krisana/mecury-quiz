import axios from "../axios.config";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post('/login', {
      email,
      password
    }
    );
    return response;
  } catch (e) {
    return e.response;
  }
}