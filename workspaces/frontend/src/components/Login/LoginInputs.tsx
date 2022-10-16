import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(33, 33, 41);
  overflow: scroll;
  border-left: 1px solid rgb(41, 41, 47);
  border-right: 1px solid rgb(41, 41, 47);
  height: 80vh;
  width: 100%;
`;

type LoginInputProps = {
  onLogin: (username: string) => Promise<void>;
};

export const LoginInput = (props: LoginInputProps) => {
  const [username, setUsername] = useState<string>("");

  const attemptLogin = async () => {
    props.onLogin(username);
    setUsername(username); // Not neccessary?
  };

  return (
    <Container className="loginForm">
      <div className="inputFields">
        <div>
          <p>Username:</p>
          <input
            className="input"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <a className="button" onClick={attemptLogin}>
          Enter
        </a>
        <h3 className="loginHeader">Be whoever you want!</h3>
        <p className="loginHeader">
          Act as one of the created users to the right or create your own
          identity. We really mean it when we say ANY1.
        </p>
      </div>
    </Container>
  );
};
