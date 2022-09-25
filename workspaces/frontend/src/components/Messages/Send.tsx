import Message from "@chatapp/shared";
import axios from "axios";
import React, { useState } from "react";

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  bottomRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Send: React.FC<Props> = ({ setMessages, bottomRef }) => {
  const [messageText, setMessageText] = useState("")

  const scrollDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const createMessage = (messageText: string): void => {
    const message: Message = {
      text: messageText,
      timeStamp: new Date()
    }
    axios
      .post<Message[]>("/messages", message)
      .then((response) => setMessages(response.data))
      delay(100)
      .then(scrollDown)
  };
  
  return (
    <div className="textInput">
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
