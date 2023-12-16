import axios from "axios";

class AuthService {


  login = (email, password) => {
    return axios.post(`https://recipe-app-0ddk.onrender.com/auth/login`, { email, password });
  };

  register = (username, email, password) => {
    return axios.post(`https://recipe-app-0ddk.onrender.com/register`, {
      username,
      email,
      password,
    });
  };

  logout = () => {
    localStorage.removeItem("authToken");
  };
}

export default new AuthService();
