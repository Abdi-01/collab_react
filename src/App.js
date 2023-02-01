import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carousel from "./Pages/Carousel";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className="App">
      {/* Import Component or Page Here ⬇️ */}
      <Navbar />
      <Carousel />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
