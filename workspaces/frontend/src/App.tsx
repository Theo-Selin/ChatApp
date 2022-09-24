import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/header/Header";
import Messages from "./components/Messages/Messages";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <div className="App-row">
          <Navigation />
          <Messages />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
