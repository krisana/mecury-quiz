import axios from "../axios.config";

export const getUserData = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const {data} = await axios.get('/user', { headers: { Authorization: 'Bearer ' + accessToken } });
    return data;
  } catch (e) {
    return e.response;
  }
}
