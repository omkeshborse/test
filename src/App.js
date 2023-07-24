import "./App.css";
import NavBar from "./components/NavBar";
import Herosection from "./components/Herosection";
import Showcase from "./components/Showcase";
import Gallery from "./components/Gallery";
import Ourpeople from "./components/Ourpeople";
function App() {
  return (
    <>
      <NavBar />
      <Herosection />
      <Showcase/>
      <Gallery/>
      <Ourpeople/>
    </>
  );
}

export default App;
