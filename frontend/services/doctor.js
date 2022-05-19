import axios from "../axios.config";

export const getDoctors = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const { data } = await axios.get('/doctors', { headers: { Authorization: 'Bearer ' + accessToken } });
    return data;
  } catch (e) {
    return e.response;
  }
}

export const getDoctorSchedules = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const { data } = await axios.get('/doctor-schedules', { headers: { Authorization: 'Bearer ' + accessToken } });
    return data;
  } catch (e) {
    return e.response;
  }
}
