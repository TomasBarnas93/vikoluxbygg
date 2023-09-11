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
import aboutImg from "../assets/images/aboutImg.jpg";
import servicesPl from "../assets/images/servicesPl.png";
import servicesEn from "../assets/images/servicesEn.png";
import servicesSv from "../assets/images/servicesSv.png";
import { LanguageContext } from "../services/LanguageContext";
import { useContext } from "react";

const Home = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(LanguageContext);

  const languageImageMap = {
    en: servicesEn,
    pl: servicesPl,
    sv: servicesSv,
  };

  return (
    <>
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
          flex="1"
          p={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          backgroundColor="white"
          borderRadius="lg"
        >
          <Text color="#5a351d" mb={4} fontSize="x-large" fontFamily="Poppins">
            {t("About")}
          </Text>
        </Box>
        <Box flex="1" p={5} position="relative">
          <Image
            src={aboutImg}
            alt="aboutImg"
            borderRadius="lg"
            objectFit="cover"
            boxSize="full"
            maxH="30rem"
          />
        </Box>
      </Flex>

      <Flex p={10} justifyContent="center" alignItems="center" maxH="10rem">
        <Box position="relative" display="inline-block">
          <Image src={languageImageMap[selectedLanguage]} maxH="5rem" />
          <Box
             position="absolute"
             bottom="-1rem"
             left="50%"
             transform="translateX(-50%)"
             borderBottom={{ base: "0.2em solid #5a351d", md: "0.3em solid #5a351d" }}
             width="70%"
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
            fontSize="2xl"
            fontFamily="Poppins"
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
    </>
  );
};

export default Home;
