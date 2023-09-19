import { Flex, Text, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      m={5}
      p={5}
      boxShadow="2xl"
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontFamily="Allrounder Monument Test"
          fontSize={{ base: "x-large", md: "xxx-large" }}
          color="#5a351d"
        >
          {t("Review")}
        </Text>
        <Box
          borderBottom={{
            base: "0.1em solid #A0794E",
            md: "0.1em solid #A0794E",
          }}
          width="40%"
          m={2}
        ></Box>
      </Flex>

      <Flex>
        <div className="elfsight-app-b8e3cb69-4b00-4c90-a239-24ff4d7b1d3a"></div>
      </Flex>
    </Flex>
  );
};

export default Reviews;
