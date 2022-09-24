import React, { useEffect, useState } from "react";
import Message from "@chatapp/shared";
import "./App.css";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_MESSAGE_API || "http://localhost:3001";
const fetchMessages = async (): Promise<Message[]> => {
  const response = await axios.get<Message[]>("/messages");
  return response.data;
};

function App() {
  const [messageText, setMessageText] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | undefined>();

  const createMessage = (messageText: string): void => {
    const message: Message = {
      text: messageText,
      timeStamp: new Date()
    }
    axios
      .post<Message[]>("/messages", message)
      .then((response) => setMessages(response.data))
  };

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
    <div className="App">
      <header className="App-header">{output()}</header>
      <div>
        <section>
          <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
          <button onClick={(e) => createMessage(messageText)}>Send</button>
        </section>
      </div>
    </div>
  );
}

export default App;
