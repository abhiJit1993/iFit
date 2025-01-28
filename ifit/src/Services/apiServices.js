import axios from 'axios';

const BASE_URL = "https://reimagined-tribble-pp67x7pj9q73rxg-5000.app.github.dev/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',  // Ensure this header is set
  },
  withCredentials: true, // Allows sending cookies (if needed)
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('IFlexToken'); // Get token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Generic API functions
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
