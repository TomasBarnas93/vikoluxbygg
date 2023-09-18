import React from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import aboutImg from "../assets/images/aboutimage.png";
import servicesPl from "../assets/images/servicesPl.png";
import servicesEn from "../assets/images/servicesEn.png";
import servicesSv from "../assets/images/servicesSv.png";
import mottoPl from "../assets/images/mottoPl.png";
import mottoEn from "../assets/images/mottoEn.png";
import mottoSv from "../assets/images/mottoSv.png";
import { LanguageContext } from "../services/LanguageContext";
import { forwardRef, useContext } from "react";

const Home = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(LanguageContext);

  const serviceImageMap = {
    en: { src: servicesEn, maxW: { base: "24rem", md: "43rem"}, maxH: { base: "5rem", md: "4rem" } },
    pl: { src: servicesPl, maxW: { base: "20rem", md: "45rem"}, maxH: { base: "5rem", md: "4rem" } },
    sv: { src: servicesSv, maxW: { base: "23rem", md: "43rem"}, maxH: { base: "5rem", md: "4rem" } },
  };
  const mottoImageMap = {
    en: mottoEn,
    pl: mottoPl,
    sv: mottoSv,
  };
  return (
    <div ref={ref}>
      <Flex
        justifyContent="center"
        alignItems="center"
        maxW="50rem"
        margin="0 auto"
      >
        <Image
          src={mottoImageMap[selectedLanguage]}
          maxW={{ base: "90%", md: "50rem" }}
        />
      </Flex>

      <Flex
        direction={["column", "row"]}
        align="center"
        justify="center"
        spacing="5"
        p={5}
        borderRadius="lg"
        shadow="xl"
      >
        <Box
          flex={{ base: "1", md: "0.5" }}
          p={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="justify"
          backgroundColor="white"
          borderRadius="lg"
        >
          <Text
            color="#5a351d"
            mb={4}
            fontSize={{ base: "xl", md: "x-large", lg: "xx-large" }}
            fontFamily="Allrounder Monument Test"
          >
            {t("About")
              .split("\n")
              .map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
          </Text>
        </Box>
        <Box flex={{ base: "1", md: "0.5" }} p={5} position="relative">
          <Image
            src={aboutImg}
            alt="aboutImg"
            objectFit="cover"
            boxSize="full"
            maxW={{ base: "100%", md: "100%" }}
          />
        </Box>
      </Flex>

      <Flex p={10} justifyContent="center" alignItems="center" maxH="10rem">
        <Box position="relative" display="inline-block">
          <Image
            src={serviceImageMap[selectedLanguage].src}
            maxH={serviceImageMap[selectedLanguage].maxH}
            maxW={serviceImageMap[selectedLanguage].maxW}
          />
          <Box
            position="absolute"
            bottom="-1rem"
            left="50%"
            transform="translateX(-50%)"
            borderBottom={{
              base: "0.1em solid #A0794E",
              md: "0.1em solid #A0794E",
            }}
            width="30%"
          ></Box>
        </Box>
      </Flex>

      <Flex
        p={10}
        justifyContent="center"
        alignItems="center"
        spacing="5"
        borderRadius="lg"
        shadow="xl"
      >
        <Box>
          <UnorderedList
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
            gap={{ base: 5, md: 10 }}
            fontSize={{ base: "xl", md: "x-large", lg: "xx-large"}}
            fontFamily="Allrounder Monument Test"
            color="#5a351d"
          >
            <ListItem>{t("1")}</ListItem>
            <ListItem>{t("2")}</ListItem>
            <ListItem>{t("3")}</ListItem>
            <ListItem>{t("4")}</ListItem>
            <ListItem>{t("5")}</ListItem>
            <ListItem>{t("6")}</ListItem>
            <ListItem>{t("7")}</ListItem>
            <ListItem>{t("8")}</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </div>
  );
});

export default Home;
