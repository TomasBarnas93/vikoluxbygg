import React, { useContext } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import photoEn from "../assets/images/photoEn.JPG";
import photoPl from "../assets/images/photoPl.JPG";
import photoSv from "../assets/images/photoSv.JPG";
import testImg from "../assets/images/1.jpg";
import { LanguageContext } from "../services/LanguageContext";

const BeforeAfter = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const photoImageMap = {
    en: photoEn,
    pl: photoPl,
    sv: photoSv,
  };

  return (
    <div>
      <Flex
        p={{ base: "1rem", md: "2rem" }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Flex>
          <Box position="relative" display="inline-block">
            <Image
              src={photoImageMap[selectedLanguage]}
              maxH={{ base: "5rem", md: "9rem" }}
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
              width="50%"
            ></Box>
          </Box>
        </Flex>
        <Flex>
          <Image src={testImg} maxH="50rem" mt={10} />
        </Flex>
      </Flex>
      <Box boxShadow="lg">&nbsp;</Box>
    </div>
  );
};

export default BeforeAfter;
