import React, { useContext, useEffect, useState } from "react";
import {
  Select,
  Image,
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logoImg from "../assets/images/logoBg.png";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../services/LanguageContext";

const Navbar = ({ homeRef, projectsRef, contactRef }) => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    localStorage.setItem("selectedLanguage", newLanguage);
  };

  const handleCloseMenu = (ref) => {
    if (isMobile && isOpen) {
      onToggle();
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      height="5rem"
      transition="background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s"
      background="rgba(199, 199, 199, 0.5)"
      paddingX="1rem"
      boxShadow="xl"
    >
      <Box flex="1">
        <ChakraLink onClick={() => handleCloseMenu(homeRef)}>
          <Image src={logoImg} alt="logo" w="10rem" h="auto" />
        </ChakraLink>
      </Box>

      {/* //Desktop */}

      {!isMobile && !isScrolledDown && (
        <Box flex="1" textAlign="center">
          <Flex justifyContent="center" alignItems="center" margin="0 auto">
            <Box p="2">
              <ChakraLink
                to="/projects"
                color="black"
                fontSize="md"
                onClick={() => handleCloseMenu(projectsRef)}
              >
                <Text
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "#855821",
                  }}
                  color="#855821"
                  fontSize="xl"
                  fontWeight="medium"
                  fontFamily="Allrounder Monument Test"
                >
                  {t("Projects")}
                </Text>
              </ChakraLink>
            </Box>
            <Box p="2">
              <ChakraLink
                to="/contact"
                color="black"
                fontSize="md"
                onClick={() => handleCloseMenu(contactRef)}
              >
                <Text
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "#855821",
                  }}
                  color="#855821"
                  fontSize="xl"
                  fontWeight="medium"
                  fontFamily="Allrounder Monument Test"
                >
                  {t("Contact")}
                </Text>
              </ChakraLink>
            </Box>
          </Flex>
        </Box>
      )}

      <Spacer />

      {!isMobile && !isScrolledDown && (
        <Box textAlign="right">
          <Select
            onChange={handleLanguageChange}
            value={selectedLanguage}
            backgroundColor=""
            color="#855821"
            borderColor=""
            _hover={{
              backgroundColor: "#da8238",
            }}
            _focus={{
              borderColor: "#da8238", 
            }}
          >
            <option value="en">EN</option>
            <option value="pl">PL</option>
            <option value="sv">SV</option>
          </Select>
        </Box>
      )}

      {/* Mobile   */}

      {isMobile && (
        <Box>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size="lg"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            variant="ghost"
            onClick={onToggle}
          />
        </Box>
      )}

      {isMobile && isOpen && (
        <VStack
          pos="absolute"
          top="5rem"
          right="0"
          left="0"
          bg="#ffff"
          spacing="2"
          p="2"
        >
          <Box>
            <ChakraLink
              to="/projects"
              color="black"
              fontSize="md"
              onClick={() => handleCloseMenu(projectsRef)}
            >
              <Text
                color="#855821"
                fontWeight="medium"
                fontFamily="Allrounder Monument Test"
              >
                {t("Projects")}
              </Text>
            </ChakraLink>
          </Box>
          <Box>
            <ChakraLink
              to="/contact"
              color="black"
              fontSize="md"
              onClick={() => handleCloseMenu(contactRef)}
            >
              <Text
                color="#855821"
                fontWeight="medium"
                fontFamily="Allrounder Monument Test"
              >
                {t("Contact")}
              </Text>
            </ChakraLink>
          </Box>
          <Box>
            <Select value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="en">EN</option>
              <option value="pl">PL</option>
              <option value="sv">SV</option>
            </Select>
          </Box>
        </VStack>
      )}
    </Flex>
  );
};

export default Navbar;
