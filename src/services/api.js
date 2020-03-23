import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.50.246:3200/api'
});
export default api;