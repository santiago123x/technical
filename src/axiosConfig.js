import axios from "axios";

const mode = process.env.NODE_ENV;
let baseURL = "http://127.0.0.1:5000";

if (mode == "production") {
  baseURL = process.env.API_URL;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
