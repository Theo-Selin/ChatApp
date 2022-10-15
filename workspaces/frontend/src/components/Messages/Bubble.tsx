import { Message } from "@chatapp/shared";
import moment from "moment";
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
            <div key={item._id}>
              <div className="messageBubble">
                <p className="user">{item.user}</p>
                <p className="message">{item.text}</p>
                <p className="timeStamp">
                  {moment(item.timeStamp).format("MMMM Do YYYY, h:mm")}
                </p>
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
