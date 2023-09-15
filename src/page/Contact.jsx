import React, { useState, forwardRef, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Container,
  Textarea,
  Image,
  Box,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../services/LanguageContext";
import contactEn from "../assets/images/contactEn.JPG";
import contactPl from "../assets/images/contactPl.JPG";

const Contact = forwardRef((props, ref) => {
  const [recipientName, setRecipientName] = useState("");
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(LanguageContext);

  const contactImageMap = {
    en: contactEn,
    pl: contactPl,
    sv: contactEn,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //#region
    const SERVICE_ID = "service_k8vxijn";
    const TEMPLATE_ID = "template_a7cz8yd";
    const USER_ID = "VMTgh-aT4huSqsGHr";
    //#endregion

    const formData = {
      from_firstname: e.target.elements.from_firstname.value,
      from_lastname: recipientName,
      message: e.target.elements.message.value,
      user_email: e.target.elements.user_email.value,
      user_telefon: e.target.elements.user_telefon.value,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        const sucessMessage = t("Success");
        Swal.fire({
          icon: "success",
          title: sucessMessage,
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        const wrongMessage = t("Wrong");
        Swal.fire({
          icon: "error",
          title: wrongMessage,
          text: error.text,
        });
      });
  };

  const handleRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };

  return (
    <Container
      maxW="container.xl"
      p={8}
      borderRadius="lg"
      boxShadow="sm"
      shadow="xl"
      fontFamily="Allrounder Monument Test"
      ref={ref}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      <Box position="relative" display="inline-block" mb="4rem">
        <Image
          src={contactImageMap[selectedLanguage]}
          maxH={{ base: "5rem", md: "6rem" }}
          objectFit="cover"
          mx="auto"
        />
        <Box
          position="absolute"
          bottom="0.3rem"
          left="50%"
          transform="translateX(-50%)"
          borderBottom={{
            base: "0.1em solid #A0794E",
            md: "0.1em solid #A0794E",
          }}
          width="15%"
        ></Box>
      </Box>
      <FormControl as="form" onSubmit={handleSubmit}>
        <Flex direction={["column", "row"]} gap={6} mb={6}>
          <Flex direction="column" flex="1">
            <FormLabel color="#5a351d" fontSize="lg" mt={2}>
              {t("first_name")}
            </FormLabel>
            <Input
              size="lg"
              name="from_firstname"
              w="100%"
              borderColor="#5a351d"
              required
            />
          </Flex>
          <Flex direction="column" flex="1">
            <FormLabel color="#5a351d" fontSize="lg" mt={2}>
              {t("last_name")}
            </FormLabel>
            <Input
              size="lg"
              name="from_lastname"
              w="100%"
              borderColor="#5a351d"
              onChange={handleRecipientNameChange}
              required
            />
          </Flex>
        </Flex>
        <Flex direction={["column", "row"]} gap={6} mb={6}>
          <Flex direction="column" flex="1">
            <FormLabel color="#5a351d" fontSize="lg" mt={2}>
              {t("email_address")}
            </FormLabel>
            <Input
              size="lg"
              name="user_email"
              type="email"
              w="100%"
              borderColor="#5a351d"
              required
            />
          </Flex>
          <Flex direction="column" flex="1">
            <FormLabel color="#5a351d" fontSize="lg" mt={2}>
              {t("telefon")}
            </FormLabel>
            <Input
              size="lg"
              name="user_telefon"
              type="tel"
              w="100%"
              borderColor="#5a351d"
              inputMode="numeric"
              pattern="\d*"
              required
            />
          </Flex>
        </Flex>
        <Flex direction="column" mb={6}>
          <FormLabel color="#5a351d" fontSize="lg" mt={2}>
            {t("message")}
          </FormLabel>
          <Textarea
            size="lg"
            name="message"
            w="100%"
            borderColor="#5a351d"
            fontFamily="Arial"
            required
          />
        </Flex>
        <Button
          leftIcon={<EmailIcon />}
          size="lg"
          bg="#855821"
          color="#ffffff"
          mt={2}
          type="submit"
        >
          {t("send")}
        </Button>
      </FormControl>
    </Container>
  );
});

export default Contact;
