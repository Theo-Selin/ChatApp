import { Message, TokenPayload } from "@chatapp/shared";
import moment from "moment";
import React, { useRef, useState } from "react";
import jwt_decode from "jwt-decode";

type Props = {
  messages: Message[];
  bottomRef: React.MutableRefObject<HTMLDivElement | null>;
  error?: string;
};

const Bubble: React.FC<Props> = ({ messages, error, bottomRef }) => {
  const token: string | null = localStorage.getItem("jwt");
  const decoded: TokenPayload = jwt_decode(token!);
  const user = decoded.sub;

  if (error) {
    return <div>{error}</div>;
  } else if (messages) {
    return (
      <>
        {messages.map((item) => {
          return (
            <div key={item._id} className="messageBubble">
              <div
                className={user === item.user ? "userBubble" : "otherBubble"}
              >
                <div className="messageContainer">
                  <a
                    href="/profile/:id"
                    className={user === item.user ? "user" : "other"}
                  >
                    {item.user}
                  </a>
                  <p className="message">{item.text}</p>
                </div>

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
