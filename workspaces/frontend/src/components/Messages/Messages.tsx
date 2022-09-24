import React, { useState, useEffect } from "react";
import Message from "@chatapp/shared";
import styled from "styled-components"
import axios from "axios";
import Send from "./Send";

const Container = styled.div`
  border: 1px solid grey;
  height: 80vh;
  width: 100%;
`

axios.defaults.baseURL =
  process.env.REACT_APP_MESSAGE_API || "http://localhost:3001";

const fetchMessages = async (): Promise<Message[]> => {
  const response = await axios.get<Message[]>("/messages");
  return response.data;
};

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    fetchMessages()
      .then(setMessages)
      .catch((error) => {
        setMessages([]);
        setError("Error fetching messages");
      });
  }, []);

  const output = () => {
    if (error) {
      return <div>{error}</div>;
    } else if (messages) {
      return (
        <div>
          {messages.map((item) => {
            return <p key={item.id}>{item.text}</p>;
          })}
        </div>
      );
    } else {
      return <div>"Waiting for messages..."</div>;
    }
  };
  return (
    <Container className="messageContainer">
      Messages
      <div className="Messages">{output()}</div>
      <Send />
    </Container>
  );
};

export default Messages;
