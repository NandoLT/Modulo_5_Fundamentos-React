import axios from 'axios';


const client = axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data);

//TODO Ajustar la validación de token
const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

setAuthorizationHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDhlNDlhMC02ZmQ2LTQzZjUtYjY1OC1jNzg0ZTY1NDU0MmIiLCJpYXQiOjE2MTc2NTM1MjMsImV4cCI6MTYxNzczOTkyM30.cKbzaNCxA0qUWAIzYbNw4mvbAqalVq6HiorcaeopXXk');

export default client;