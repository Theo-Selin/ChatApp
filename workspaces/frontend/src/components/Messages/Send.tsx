import Message from "@chatapp/shared";
import axios from "axios";
import React, {useState} from "react";
import Messages from "./Messages";

const Send = () => {
  const [messageText, setMessageText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const createMessage = (messageText: string): void => {
    const message: Message = {
      text: messageText,
      timeStamp: new Date()
    }
    axios
      .post<Message[]>("/messages", message)
      .then((response) => setMessages(response.data))
  };
  
  return (
    <div>
      <section>
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button onClick={(e) => createMessage(messageText)}>Send</button>
      </section>
    </div>
  );
};

export default Send;
