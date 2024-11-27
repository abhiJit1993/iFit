import axios from 'axios';

const BASE_URL ="https://reimagined-tribble-pp67x7pj9q73rxg-5000.app.github.dev/api/"

const axiosInstance = axios.create({
  baseURL:BASE_URL, // Set your API base URL in environment variables
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

// Interceptors for request
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the config, e.g., add Authorization headers if needed
    const token = localStorage.getItem('token'); // Get token from local storage (or other source)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptors for response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error scenarios
    console.error(error);
    return Promise.reject(error);
  }
);

// Generic service functions
const apiService = {
  get: (url, params = {}, config = {}) =>
    axiosInstance.get(url, { params, ...config }),

  post: (url, data = {}, config = {}) =>
    axiosInstance.post(url, data, { ...config }),

  put: (url, data = {}, config = {}) =>
    axiosInstance.put(url, data, { ...config }),

  patch: (url, data = {}, config = {}) =>
    axiosInstance.patch(url, data, { ...config }),

  delete: (url, config = {}) =>
    axiosInstance.delete(url, { ...config }),
};

export default apiService;
