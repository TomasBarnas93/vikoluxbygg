import React, { useRef } from "react";
import Home from "../page/Home";
import Projects from "../page/Projects";
import Contact from "../page/Contact";
import Foot from "../page/Foot";
import Navbar from "./Navbar";

function Body() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <Navbar
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Foot />
    </main>
  );
}

export default Body;
