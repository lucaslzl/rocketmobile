import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.0.104:3333',
    baseURL: 'http://177.220.24.24:3333',
});

export default api;