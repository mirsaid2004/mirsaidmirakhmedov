import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Works from "./components/works";
import Contact from "./components/contact";
import { Element } from "react-scroll";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Element name="contact" className="relative z-0">
        <Contact />
        <StarsCanvas />
      </Element>
    </div>
  );
}

export default App;
