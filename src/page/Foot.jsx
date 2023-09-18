import React from "react";
import email from "../assets/images/email.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import tel from "../assets/images/tel.png";
import map from "../assets/images/map.png";
import bkrlogo from "../assets/images/bkrlogo.jpg";
import { Link, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Foot = () => {
  const { t } = useTranslation();

  let date = new Date();
  let year = date.getFullYear();

  const [isMobile] = useMediaQuery("(max-width: 48em)");

  if (isMobile) {
    //Mobile
    return (
      <>
        <Flex
          direction="column"
          align="center"
          justify="center"
          borderRadius="lg"
          shadow="xl"
          margin="2rem auto"
        >
          <Flex direction="column" align="start" p={5}>
          <Flex align="center" flexDirection="row" mb={3} mr="10.5rem">
              <Image src={tel} maxH="2.5rem" mr={3} mb={0} />
              <Text
                color="#5a351d"
                fontFamily="Allrounder Monument Test"
                fontSize="lg"
                fontWeight="medium"
                mt="0.5rem"
              >
                073 557 90 64
              </Text>
            </Flex>
            <Flex align="center" flexDirection="row" mb={2}>
              <Image src={email} maxH="2.5rem" mr={3} mb={0} />
              <Link
                href="mailto:kontakt@vikoluxbyggab.se"
                _hover={{ textDecoration: "none" }}
              >
                <Text
                  color="#5a351d"
                  fontFamily="Allrounder Monument Test"
                  fontSize="lg"
                  fontWeight="medium"
                  mt="0.5rem"
                >
                  kontakt@vikoluxbyggab.se
                </Text>
              </Link>
            </Flex>
            <Flex align="center" flexDirection="row">
              <Image src={map} maxH="2.5rem" mr={3} mb={0} />
              <Text
                color="#5a351d"
                fontFamily="Allrounder Monument Test"
                fontSize="lg"
                fontWeight="medium"
                mt="0.5rem"
              >
                {t("adress")}
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction="row"
            align="center"
            justifyContent="center"
            gap="1rem"
          >
            <Link
              href="https://www.facebook.com/profile.php?id=100082258553443"
              _hover={{ textDecoration: "none" }}
            >
              <Image src={facebook} maxH="2.5rem" />
            </Link>
            <Link
              href="https://www.instagram.com/vikoluxbygg/"
              _hover={{ textDecoration: "none" }}
            >
              <Image src={instagram} maxH="2.5rem" />
            </Link>
            <Link href="https://www.bkr.se/">
              <Image src={bkrlogo} maxH="2.5rem" />
            </Link>
          </Flex>
        </Flex>

        <footer>&copy; {year} Vikolux Bygg AB | All rights reserved.</footer>
      </>
    );
  }

  //Desktop
  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="center"
        borderRadius="lg"
        shadow="xl"
        margin="2rem auto"
      >
        <Flex direction="column" align="center" p={5}>
          <Flex align="center" margin="1rem auto">
            <Image src={tel} maxH="2.5rem" />
          </Flex>
          <Flex align="center">
            <Image src={email} maxH="2.5rem" 
            marginBottom="1rem"
            />
            <Link
              href="mailto:kontakt@vikoluxbyggab.se"
              _hover={{ textDecoration: "none" }}
            ></Link>
          </Flex>
          <Flex align="center">
            <Image src={map} maxH="2.5rem" />
          </Flex>
        </Flex>

        <Flex
          direction="column"
          align="start"
          p={5}
          borderRight="0.2rem solid #ccc"
          borderLeft="0.2rem solid #ccc"
        >
          <Text
            color="#5a351d"
            fontFamily="Allrounder Monument Test"
            fontSize="lg"
            fontWeight="medium"
            marginBottom="1.5rem"
            marginTop="1rem"
          >
            073-557 90 64
          </Text>
          <Text
            color="#5a351d"
            fontFamily="Allrounder Monument Test"
            fontSize="lg"
            fontWeight="medium"
            marginBottom="2rem"
            marginTop="0.5rem"
          >
            kontakt@vikoluxbyggab.se
          </Text>
          <Text
            color="#5a351d"
            fontFamily="Allrounder Monument Test"
            fontSize="lg"
            fontWeight="medium"
          >
            {t("adress")}
          </Text>
        </Flex>

        <Flex direction="column" align="center" p={5}>
          <Link
            href="https://www.facebook.com/profile.php?id=100082258553443"
            _hover={{ textDecoration: "none" }}
          >
            <Image src={facebook} maxH="2.5rem" mb={2} />
          </Link>
          <Link
              href="https://www.instagram.com/vikoluxbygg/"
              _hover={{ textDecoration: "none" }}
            >
              <Image src={instagram} maxH="2.5rem" mb={2} />
            </Link>
          <Link href="https://www.bkr.se/">
            <Image src={bkrlogo} maxH="2.5rem" />
          </Link>
        </Flex>
      </Flex>

      <footer>&copy; {year} Vikolux Bygg AB | All rights reserved.</footer>
    </>
  );
};

export default Foot;
