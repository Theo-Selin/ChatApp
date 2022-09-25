import Message from "@chatapp/shared";
import axios from "axios";
import React, {useState} from "react";

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const Send: React.FC<Props> = ({ setMessages }) => {
  const [messageText, setMessageText] = useState("")

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
