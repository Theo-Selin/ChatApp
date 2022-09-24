import React, { useEffect, useState } from "react";
import Message from "@chatapp/shared"
import "./App.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"
const fetchMessages = async (): Promise<Message> => {
  const response = await axios.get<Message>("/messages")
  return response.data
}

function App() {
  const [message, setMessage] = useState<Message | undefined>();
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    fetchMessages().then(setMessage).catch((error)=> {
      setMessage(undefined)
      setError("Error fetching messages")
    })
  }, [])

  const output = () => {
    if(error) {
      return (<>{error}</>)
    } else if (message) {
      return (<>{message.text}</>)
    } else {
      return (<>"Waiting for messages..."</>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {output()}
      </header>
    </div>
  );
}

export default App;
