import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Flex, Box, Text } from "@chakra-ui/react";
import aboutImg from "../assets/images/aboutImg.jpg";

const Home = () => {
  const { t } = useTranslation();

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
          <Text mb={4} fontSize="x-large">
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
    </>
  );
};

export default Home;
