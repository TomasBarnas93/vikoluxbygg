import React, { useContext } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import photoEn from "../assets/images/photoEn.JPG";
import photoPl from "../assets/images/photoPl.JPG";
import photoSv from "../assets/images/photoSv.JPG";
import beforeAfter1 from "../assets/images/beforeAfter1.JPG";
import beforeAfter2 from "../assets/images/beforeAfter2.JPG";
import { LanguageContext } from "../services/LanguageContext";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import BeforeAwesomeSliderStyles from "react-awesome-slider/src/styles";

const BeforeAutoplaySlider = withAutoplay(AwesomeSlider);

const BeforeAfter = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const photoImageMap = {
    en: { src: photoEn, maxH: { base: "5rem", md: "9rem" } },
    pl: { src: photoPl, maxH: { base: "6rem", md: "10rem" } },
    sv: { src: photoSv, maxH: { base: "7rem", md: "9rem" } },
  };

  return (
    <div className="before-after-container">
      <Flex
        p={{ base: "1rem", md: "2rem" }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Flex>
          <Box position="relative" display="inline-block">
            <Image
              src={photoImageMap[selectedLanguage].src}
              maxH={photoImageMap[selectedLanguage].maxH}
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="0.5rem"
              left="50%"
              transform="translateX(-50%)"
              borderBottom={{
                base: "0.1em solid #A0794E",
                md: "0.1em solid #A0794E",
              }}
              width="15%"
            ></Box>
          </Box>
        </Flex>
      </Flex>
      <BeforeAutoplaySlider
        cssModule={BeforeAwesomeSliderStyles}
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
        <div data-src={beforeAfter1} />
        <div data-src={beforeAfter2} />
      </BeforeAutoplaySlider>
    </div>
  );
};

export default BeforeAfter;
