import axios from "axios";
import { useState } from "react";
import { delay } from "../messages/utils";
import { LoginInput } from "./LoginInputs";

const Login = () => {
  const [message, setMessage] = useState("Login");

  const performLogin = async (username: string): Promise<void> => {
    const loginResponse = await axios.post("/login", {
      username: username,
    });
    if (loginResponse && loginResponse.status === 200) {
      localStorage.setItem("jwt", loginResponse.data);
      setMessage(`Logging in as ${username}`);
      await delay(1000);
      window.location.reload();
    } else if (loginResponse && loginResponse.status === 201) {
      setMessage("Created new user");
      await delay(1000);
      window.location.reload();
    } else if (loginResponse && loginResponse.status === 204) {
      setMessage("You need to pick someone");
    }
  };
  return (
    <>
      <p className="loginInfo">{message}</p>
      <LoginInput onLogin={performLogin} />
    </>
  );
};

export default Login;
