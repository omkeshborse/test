import "./App.css";
import NavBar from "./components/NavBar";
import Herosection from "./components/Herosection";
import Showcase from "./components/Showcase";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
      <NavBar />
      <Herosection />
      <Showcase/>
      <Gallery/>
    </>
  );
}

export default App;
