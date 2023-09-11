import React from "react";
import email from "../assets/images/email.png";
import facebook from "../assets/images/facebook.png";
import { Link, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Foot = () => {
  const { t } = useTranslation();

  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="center"
        borderRadius="lg"
        shadow="xl"
        margin="2rem auto"
      >
        <Flex
          direction="column"
          align="center"
          p={5}
          borderRight={["none", "1px solid #ccc"]}
        >
          <Flex align="center" margin="1rem auto">
            <Image src={email} maxH="2.5rem" />
            <Link
              href="mailto:kontakt@vikoluxbyggab.se"
              _hover={{ textDecoration: "none" }}
            ></Link>
          </Flex>
          <Link
            href="https://www.facebook.com/profile.php?id=100082258553443"
            _hover={{ textDecoration: "none" }}
          >
            <Image src={facebook} maxH="2.5rem" mb={2} />
          </Link>
        </Flex>

        <Flex direction="column" align={["center", "start"]} spacing={5} p={5}>
          <Text
            color="#5a351d"
            fontFamily="Poppins"
            fontSize="lg"
            fontWeight="medium"
            marginTop="1rem"
            marginBottom="0.5rem"
          >
            kontakt@vikoluxbyggab.se
          </Text>
          <Text
            color="#5a351d"
            fontFamily="Poppins"
            fontSize="lg"
            fontWeight="medium"
          >
            073-557 90 64
          </Text>
          <Text
            color="#5a351d"
            fontFamily="Poppins"
            fontSize="lg"
            fontWeight="medium"
          >
            {t("adress")}
          </Text>
        </Flex>
      </Flex>

      <footer>&copy; {year} Vikolux Bygg AB | All rights reserved.</footer>
    </>
  );
};

export default Foot;
