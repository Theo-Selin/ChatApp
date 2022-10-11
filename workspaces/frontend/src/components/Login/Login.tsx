import axios from "axios";
import React, { useState, useEffect } from "react";
import { Message } from "@chatapp/shared";
import { LoginInput } from "./LoginInputs";

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<Props> = ({ setMessages, setError, setLoggedIn }) => {
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
      setError("");
      const response = await axios.get<Message[]>("/messages");
      setMessages(response.data);
      setLoggedIn(true);
    }
  };
  return <LoginInput onLogin={performLogin} />;
};

export default Login;
