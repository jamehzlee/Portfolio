import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import './components/Section.css';

function App() {
    return (
      <div id="app" className="row justify-content-center">
        <Navbar />
        
        <div className="col col-10 p-4 m-1">
          <About />
        </div>
        
        <div className="col col-10 p-4 m-1">
          <Projects />
        </div>
        
        <div className="col col-10 p-4 m-1">
          <Contact />
        </div>
        
        <div className="col col-10 p-4 m-1">
          <Footer/>
        </div>
      </div>
    );
  }

export default App;
