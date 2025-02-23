import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { WorkedWith } from "./components/WorkedWith";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <WorkedWith />
    </>
  );
}

export default App;
