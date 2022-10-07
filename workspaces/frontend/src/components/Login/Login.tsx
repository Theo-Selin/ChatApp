import axios from "axios";
import React, { useState } from "react";
import { Message } from "@chatapp/shared";
import { LoginInput } from "./LoginInputs";

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Login: React.FC<Props> = ({ setMessages, setError }) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  const performLogin = async (
    username: string,
    password: string
  ): Promise<void> => {
    const loginResponse = await axios.post("/login", {
      username: username,
      password: password,
    });
    if (loginResponse && loginResponse.status === 200) {
      localStorage.setItem("jwt", loginResponse.data);
      setLoggedIn(true);
      setError("");
      const response = await axios.get<Message[]>("/messages");
      setMessages(response.data);
    }
  };
  return (
    <div>
      <section className="App-content">
        {!isLoggedIn ? <LoginInput onLogin={performLogin} /> : <></>}
      </section>
    </div>
  );
};

export default Login;
