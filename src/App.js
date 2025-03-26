import logo from "./logo.svg";
import "./App.css";
import CollapsibleNavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <CollapsibleNavBar />
      <Home />
    </div>
  );
}

export default App;
