import React from "react";
import Home from "../page/Home";
import Projects from "../page/Projects";
import Contact from "../page/Contact";
import Foot from "../page/Foot";

function Body() {
  return (
    <main style={{ paddingTop: '6rem' }}>
        <Home />
        <Projects />
        <Contact />
        <Foot />
    </main>
  );
}

export default Body;
