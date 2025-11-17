import About from "./About";
import "./App.css";
import Break from "./Break";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Tech from "./Tech";
function App() {
  return (
    <div className="bg-black  text-text">
      <Navbar />
      <div id="home" >
        <Hero />
      </div>
      <div id="tech" className="relative">
        <Tech />
      <Break/>
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      
      
      <a href="#home"><p className="text-center py-2 border-neutral-900 text-neutral-700 bg-gradient-to-r from-neutral-950/50 via-neutral-950/70 to-neutral-950/50 border">BACK TO TOP</p></a>
    </div>
  );
}

export default App;
