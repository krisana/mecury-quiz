import axios from "../axios.config";

export const getAppointments = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const { data } = await axios.get('/appointments', { headers: { Authorization: 'Bearer ' + accessToken } });
    return data;
  } catch (e) {
    return e.response;
  }
}

export const getMyAppointments = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const { data } = await axios.get('/my-appointments', { headers: { Authorization: 'Bearer ' + accessToken } });
    return data;
  } catch (e) {
    return e.response;
  }
}

export const createAppointment = async (data) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const body = {
      appointment_date: data.appointment_date,
      start_time: data.start_time,
      end_time: data.end_time,
      doctor_id: data.doctor_id,
    };
    const response = await axios.post('/appointments', body, {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
    return response;
  } catch (e) {
    return e.response;
  }
}

export const deleteAppointment = async (id) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await axios.delete('/appointment/' + id, { headers: { Authorization: 'Bearer ' + accessToken } });
    return response;
  } catch (e) {
    return e.response;
  }
}