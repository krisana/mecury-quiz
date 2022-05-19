import axios from 'axios';

axios.defaults.baseURL = 'http://api.medcury.quiz/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;