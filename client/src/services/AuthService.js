import axios from "axios";

class AuthService {


  login = (email, password) => {
    return axios.post(`http://localhost:4000/auth/login`, { email, password });
  };

  register = (username, email, password) => {
    return this.api.post(`/register`, {
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
