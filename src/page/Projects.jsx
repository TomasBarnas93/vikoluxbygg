import React, { useContext, forwardRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Slide1 from "../assets/images/Slide1.PNG";
import Slide2 from "../assets/images/Slide2.PNG";
import Slide4 from "../assets/images/Slide4.PNG";
import Slide5 from "../assets/images/Slide5.PNG";
import Slide6 from "../assets/images/Slide6.PNG";
import Slide7 from "../assets/images/Slide7.PNG";
import Slide8 from "../assets/images/Slide8.PNG";
import Slide9 from "../assets/images/Slide9.PNG";
import Slide10 from "../assets/images/Slide10.PNG";
import Slide11 from "../assets/images/Slide11.PNG";
import { Image, Box, Flex } from "@chakra-ui/react";
import projectEn from "../assets/images/projectsEn.png";
import projectPl from "../assets/images/projectsPl.png";
import projectSv from "../assets/images/projectsSv.png";
import { LanguageContext } from "../services/LanguageContext";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Projects = forwardRef((props, ref) => {
  const { selectedLanguage } = useContext(LanguageContext);

  const languageImageMap = {
    en: {src: projectEn, maxH: { base: "2.5rem", md: "4.5rem" } },
    pl: {src: projectPl, maxH: { base: "5rem", md: "3.5rem" } },
    sv: {src: projectSv, maxH: { base: "2rem", md: "3.5rem" } },
  };

  return (
    <div ref={ref}>
      <Flex p={10} justifyContent="center" alignItems="center" maxH="10rem">
        <Box position="relative" display="inline-block">
          <Image
            src={languageImageMap[selectedLanguage].src}
            maxH={languageImageMap[selectedLanguage].maxH}
            objectFit="cover"
          />
          <Box
            position="absolute"
            bottom="-0.9rem"
            left="50%"
            transform="translateX(-50%)"
            borderBottom={{
              base: "0.1em solid #A0794E",
              md: "0.1em solid #A0794E",
            }}
            width="40%"
          ></Box>
        </Box>
      </Flex>
      <AutoplaySlider
        cssModule={AwesomeSliderStyles}
        play={true}
        interval={2500}
        cancelOnInteraction={false}
        style={{
          width: "95%",
          maxWidth: "45rem",
          margin: "0 auto",
          marginBottom: "2rem",
          "@media (min-width: 48em)": {
            maxWidth: "30rem",
          },
        }}
      >
        <div data-src={Slide1} />
        <div data-src={Slide2} />
        <div data-src={Slide4} />
        <div data-src={Slide5} />
        <div data-src={Slide6} />
        <div data-src={Slide7} />
        <div data-src={Slide8} />
        <div data-src={Slide9} />
        <div data-src={Slide10} />
        <div data-src={Slide11} />
      </AutoplaySlider>
      <Box boxShadow="lg">&nbsp;</Box>
    </div>
  );
});

export default Projects;
