import axios from "axios";

// Service for different forms of authentication

const API_URL = "http://localhost:4000/api/auth";

class AuthService {
  async login(username: string, password: string) {
    return await axios
      .post(API_URL + "sign in", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "sign up", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    const userString = localStorage.getItem("user");
    if (userString) return JSON.parse(userString);

    return null;
  }
}

export default new AuthService();
