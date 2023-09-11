import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Slide1 from "../assets/images/Slide1.jpg";
import Slide2 from "../assets/images/Slide2.jpg";
import Slide3 from "../assets/images/Slide3.jpg";
import Slide4 from "../assets/images/Slide4.jpg";

const Projects = () => {

  return (
    <>
      <AwesomeSlider
        cssModule={AwesomeSliderStyles}
        style={{ width: "65%", margin: "0 auto", paddingTop: "4rem", marginBottom: "2rem"}}
      >
        <div data-src={Slide1} />
        <div data-src={Slide2} />
        <div data-src={Slide3} />
        <div data-src={Slide4} />
      </AwesomeSlider>
    </>
  );
};

export default Projects;
