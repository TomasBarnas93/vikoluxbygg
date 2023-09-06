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
  VStack, // Import VStack for stacking items in the mobile menu
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logoImg from "../assets/images/logoBg.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    localStorage.setItem("selectedLanguage", newLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleCloseMenu = () => {
    if (isMobile && isOpen) {
      onToggle();
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
      background="transparent"
      justifyContent="space-between"
      minWidth="max-content"
    >
      {/* Logo on the left */}
      <Box ml="1rem">
        <ChakraLink to="/">
          <Image src={logoImg} alt="logo" w="10rem" h="auto" />
        </ChakraLink>
      </Box>

      {/* Spacer for center alignment */}
      <Spacer />

      {/* Hamburger menu */}
      {isMobile ? (
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          size="lg"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          variant="ghost"
          onClick={onToggle}
        />
      ) : (
        // Desktop menu
        <Flex alignItems="center">
          <Box p="2">
            <ChakraLink
              to="/projects"
              color="black"
              fontSize="md"
              onClick={handleCloseMenu}
            >
              <Text fontFamily="Poppins">{t('Projects')}</Text>
            </ChakraLink>
          </Box>
          <Box p="2">
            <ChakraLink
              to="/contact"
              color="black"
              fontSize="md"
              onClick={handleCloseMenu}
            >
              <Text fontFamily="Poppins">{t('Contact')}</Text>
            </ChakraLink>
          </Box>
          <Spacer />
          <Box mr="10">
            <Select onChange={handleLanguageChange}>
              <option value="en">EN</option>
              <option value="pl">PL</option>
              <option value="sv">SV</option>
            </Select>
          </Box>
        </Flex>
      )}

      {/* Mobile menu */}
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
              onClick={handleCloseMenu}
            >
              <Text fontFamily="Poppins">{t('Projects')}</Text>
            </ChakraLink>
          </Box>
          <Box>
            <ChakraLink
              to="/contact"
              color="black"
              fontSize="md"
              onClick={handleCloseMenu}
            >
              <Text fontFamily="Poppins">{t('Contact')}</Text>
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
