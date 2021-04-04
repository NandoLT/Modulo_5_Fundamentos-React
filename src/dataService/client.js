import axios from 'axios';


const client = axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL,
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDhlNDlhMC02ZmQ2LTQzZjUtYjY1OC1jNzg0ZTY1NDU0MmIiLCJpYXQiOjE2MTc1NzY0NTIsImV4cCI6MTYxNzY2Mjg1Mn0.KnIxZ7_JzVakekFCN_rW5cOcDkDsTDkghV7EFpaPpE8'
});


//TODO Ajustar la validación de token
const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

setAuthorizationHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDhlNDlhMC02ZmQ2LTQzZjUtYjY1OC1jNzg0ZTY1NDU0MmIiLCJpYXQiOjE2MTc1NzY0NTIsImV4cCI6MTYxNzY2Mjg1Mn0.KnIxZ7_JzVakekFCN_rW5cOcDkDsTDkghV7EFpaPpE8')

console.log(process.env);
export default client;