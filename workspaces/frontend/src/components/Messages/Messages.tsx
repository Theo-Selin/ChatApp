import React, { useState, useEffect } from "react";
import Message from "@chatapp/shared";
import styled from "styled-components"
import Send from "./Send";
import { fetchMessages } from "./utils";

const Container = styled.div`
  border: 1px solid grey;
  height: 80vh;
  width: 100%;
`

const Messages: React.FC = () => {
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
      <Send setMessages={setMessages}/>
    </Container>
  );
};

export default Messages;
