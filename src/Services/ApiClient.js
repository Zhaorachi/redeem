import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
  }
  login(body) {
    return this.apiClient.post("/user/login", body);
  }
}

const apiClient = new ApiClient();
export default apiClient;
