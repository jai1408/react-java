import axios from 'axios';
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = "https://user-event.herokuapp.com";
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;
