import React from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import "../src/styles/styles.scss";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
      </div>
    </div>
  );
}

export default App;
