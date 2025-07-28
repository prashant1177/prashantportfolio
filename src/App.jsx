import "./App.css";
import Break from "./Break";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Tech from "./Tech";
function App() {
  return (
    <div className="font-mono text-text">
      <Navbar />
      <div id="hero">
        {" "}
        <Hero />
      </div>
      <div id="project">
        <Projects />{" "}
      </div>
      <Break/>
      <div id="tech">
        <Tech />{" "}
      </div>
      <div id="connect">
        {" "}
        <Contact />
      </div>
      <hr />
      <a href="#hero"><p className="text-center py-2">BACK TO TOP</p></a>
    </div>
  );
}

export default App;
