import axios from 'axios';
//cria conexão base apontando para o spring
const api = axios.create({
    baseURL: 'http://localhost:8080'
});
export default api;