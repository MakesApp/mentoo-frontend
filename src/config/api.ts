import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL:baseURL+'/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include credentials (cookies) in the requests
});

export default api;
