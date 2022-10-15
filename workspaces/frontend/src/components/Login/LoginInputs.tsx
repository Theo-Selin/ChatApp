import { useState } from "react";

type LoginInputProps = {
  onLogin: (username: string) => Promise<void>;
};

export const LoginInput = (props: LoginInputProps) => {
  const [username, setUsername] = useState<string>("");

  const attemptLogin = async () => {
    props.onLogin(username);
    setUsername(username);
  };

  return (
    <div className="loginForm">
      <div className="inputFields">
        <div>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <button onClick={attemptLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};
