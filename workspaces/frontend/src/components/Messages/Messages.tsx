import React, { useState, useEffect } from "react";
import Message from "@chatapp/shared";
import axios from "axios";
import Send from "./Send";

axios.defaults.baseURL = process.env.REACT_APP_MESSAGE_API || "http://localhost:3001";

const fetchMessages = async (): Promise<Message[]> => {
    const response = await axios.get<Message[]>("/messages");
    return response.data;
  };

const Messages = () => {
  const [messageText, setMessageText] = useState<string>("");
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
    <div className="Container">
      <div className="Messages">{output()}</div>
      <Send />
    </div>
  );
};

export default Messages;
