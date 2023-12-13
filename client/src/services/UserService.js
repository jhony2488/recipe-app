import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  verify = () => {
    return this.api.get(`/verify`);
  };

  getUserProfile = (userId) => {
    return this.api.get(`/users/${userId}`); // Use this.api.get instead of axios.get
  };
}

export default new UserService();
