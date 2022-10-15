import axios from "axios";
import { LoginInput } from "./LoginInputs";

const Login = () => {
  const performLogin = async (username: string): Promise<void> => {
    const loginResponse = await axios.post("/login", {
      username: username,
    });
    if (loginResponse && loginResponse.status === 200) {
      localStorage.setItem("jwt", loginResponse.data);
      window.location.reload();
    }
  };
  return <LoginInput onLogin={performLogin} />;
};

export default Login;
