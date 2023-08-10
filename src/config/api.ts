import axios from 'axios';
import { LOGIN_PAGE } from '../routes/routePath';
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: baseURL + '/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from storage
    const token = localStorage.getItem('token'); // Replace with how you retrieve your token

    // If the token is present, set it on the Authorization header
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // If the error is 401, redirect to login page
      localStorage.removeItem('token'); // Replace with how you retrieve your token
      window.location.href = LOGIN_PAGE;
    } else {
      // Otherwise, log the error
      console.error(error);
      // And show an error message to the user
      alert('An error occurred while making the request.');
    }
  }
);

export default api;
