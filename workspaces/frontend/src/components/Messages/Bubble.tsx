import Message from "@chatapp/shared";
import React, { useRef } from "react";

type Props = {
  messages: Message[];
  bottomRef: React.MutableRefObject<HTMLDivElement | null>;
  error?: string;
};

const Bubble: React.FC<Props> = ({ messages, error, bottomRef }) => {
  if (error) {
    return <div>{error}</div>;
  } else if (messages) {
    return (
      <>
        {messages.map((item) => {
          return (
            <div key="">
              <div className="messageBubble">
                <p className="message">{item.text}</p>
              </div>
              <div />
              <div ref={bottomRef} />
            </div>
          );
        })}
      </>
    );
  } else {
    return <div>"Waiting for messages..."</div>;
  }
};

export default Bubble;
