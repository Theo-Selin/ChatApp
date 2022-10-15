import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "process";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Messages from "./components/messages/Messages";
import Navigation from "./components/navigation/Navigation";

axios.defaults.baseURL =
  process.env.REACT_APP_MESSAGE_API || "http://localhost:4000";

axios.interceptors.request.use((config) => {
  if (!config?.headers) {
    config.headers = {};
  }
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    config.headers["authorization"] = `Bearer ${jwt}`;
  }
  return config;
});

function App() {
  const hasToken = localStorage.getItem("jwt");
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <div className="App-row">
          <Navigation />
          {hasToken ? <Messages /> : <Login />}
          <Contacts />
        </div>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
