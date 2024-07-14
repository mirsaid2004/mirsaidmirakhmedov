import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
    </div>
  );
}

export default App;
