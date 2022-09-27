import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Messages from "./components/Messages/Messages";
import Navigation from "./components/Navigation/Navigation";

function App () {
  return(
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
    <div className="App-footer">
      <Footer />
    </div>
  </div>
  ) 

}

export default App;
