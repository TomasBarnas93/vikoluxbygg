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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logoImg from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);

    localStorage.setItem("selectedLanguage", newLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
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
      bgGradient="linear(to-l, #D2B48C, #8B4513 )"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      justifyContent="space-between"
      boxShadow="dark-lg"
    >
      <Box ml="1rem">
        <ChakraLink to="/">
          <Image src={logoImg} alt="logo" w="10rem" h="auto" />
        </ChakraLink>
      </Box>

      <Flex alignItems="center" justifyContent="center" flex="1">
        <Box p="2">
          <ChakraLink
            to="/contact"
            color="white"
            fontSize="xl"
            onClick={handleCloseMenu}
          >
            <Text fontFamily="Poppins">{t("Contact")}</Text>
          </ChakraLink>
        </Box>
        <Box p="4">
          <ChakraLink
            to="/about"
            color="white"
            fontSize="xl"
            onClick={handleCloseMenu}
          >
            <Text fontFamily="Poppins">{t("Projects")}</Text>
          </ChakraLink>
        </Box>
      </Flex>

      <Box mr="10">
        <Select onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="pl">PL</option>
          <option value="sv">SV</option>
        </Select>
      </Box>

      {/* Hamburger menu */}
      {isMobile ? (
        isOpen ? (
          // If the mobile menu is open, show the CloseIcon
          <IconButton
            icon={<CloseIcon />}
            size="md"
            aria-label="Close navigation menu"
            variant="ghost"
            onClick={onToggle}
          />
        ) : (
          // If the mobile menu is closed, show the HamburgerIcon
          <IconButton
            icon={<HamburgerIcon />}
            size="md"
            aria-label="Open navigation menu"
            variant="ghost"
            onClick={onToggle}
          />
        )
      ) : null}
    </Flex>
  );
};

export default Navbar;
