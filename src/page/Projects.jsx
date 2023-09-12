import React, { useContext, forwardRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Slide1 from "../assets/images/Slide1.jpg";
import Slide2 from "../assets/images/Slide2.jpg";
import Slide3 from "../assets/images/Slide3.jpg";
import Slide4 from "../assets/images/Slide4.jpg";
import { Image, Box, Flex } from "@chakra-ui/react";
import photoImgEn from "../assets/images/photoEn.png";
import photoImgPl from "../assets/images/photoPl.png";
import photoImgSv from "../assets/images/photoSv.png";
import { LanguageContext } from "../services/LanguageContext";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Projects = forwardRef((props, ref) => {
  const { selectedLanguage } = useContext(LanguageContext);

  const languageImageMap = {
    en: photoImgEn,
    pl: photoImgPl,
    sv: photoImgSv,
  };

  return (
    <div ref={ref}>
      <Flex p={10} justifyContent="center" alignItems="center" maxH="10rem">
        <Box position="relative" display="inline-block">
          <Image src={languageImageMap[selectedLanguage]} maxH="4rem" />
          <Box
            position="absolute"
            bottom="-1rem"
            left="50%"
            transform="translateX(-50%)"
            borderBottom={{
              base: "0.2em solid #5a351d",
              md: "0.3em solid #5a351d",
            }}
            width="70%"
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
          margin: "0 auto",
          paddingTop: "4rem",
          marginBottom: "2rem",
        }}
      >
        <div data-src={Slide1} />
        <div data-src={Slide2} />
        <div data-src={Slide3} />
        <div data-src={Slide4} />
      </AutoplaySlider>
    </div>
  );
});

export default Projects;
