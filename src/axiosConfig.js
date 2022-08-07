import axios from "axios";

//const mode = process.env.NODE_ENV;
let baseURL = "https://technical-test-ciat.herokuapp.com/";

/*if (mode == "production") {
  baseURL = process.env.API_URL;
}*/

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
