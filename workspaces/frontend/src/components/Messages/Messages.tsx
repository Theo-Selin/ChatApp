import React, { useState, useEffect, useRef } from "react";
import Message from "@chatapp/shared";
import styled from "styled-components";
import Send from "./Send";
import { delay, fetchMessages } from "./utils";
import Bubble from "./Bubble";

const Container = styled.div`
  background-color: rgb(33, 33, 41);
  overflow: scroll;
  border-left: 1px solid rgb(41, 41, 47);
  border-right: 1px solid rgb(41, 41, 47);
  height: 80vh;
  width: 100%;
`;

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | undefined>();
  const bottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages()
      .then(setMessages)
      .catch((error) => {
        setMessages([]);
        setError("Error fetching messages");
      });
  }, []);

  return (
    <>
      <Container className="messageContainer">
        <Bubble error={error} messages={messages} bottomRef={bottomRef} />
        <Send setMessages={setMessages} bottomRef={bottomRef} />
      </Container>
    </>
  );
};

export default Messages;
