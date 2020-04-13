import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: 'http://192.168.50.16:3200/api'
});

api.interceptors.request.use(async config => {
    let token = "";
    await getToken()
      .then(function(ton){
        if (ton !== null){
          //console.log("token",ton)
          token = ton
        }else{
          console.log('Problema no token verificar api.js')
        }
      })
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
export default api;