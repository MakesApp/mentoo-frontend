import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL+'/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include credentials (cookies) in the requests
});

export default api;
