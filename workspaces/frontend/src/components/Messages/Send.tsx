import Message from "@chatapp/shared";
import axios from "axios";
import React, { useState } from "react";
import { delay } from "./utils";

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  bottomRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Send: React.FC<Props> = ({ setMessages, bottomRef }) => {
  const [messageText, setMessageText] = useState("")

  const scrollDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const createMessage = (messageText: string): void => {
    const message: Message = {
      text: messageText,
      timeStamp: new Date()
    }
    axios
      .post<Message[]>("/messages", message)
      .then((response) => setMessages(response.data))
      setMessageText("")
      delay(100)
      .then(scrollDown)
  };
  
  return (
    <div className="textContainer">
      <section className="writeField">
        <textarea placeholder="Send a message to your friends" className="textInput"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button className="sendButton" onClick={(e) => createMessage(messageText)}>Send</button>
      </section>
    </div>
  );
};

export default Send;
