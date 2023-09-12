import React, { useState, forwardRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Container,
  Textarea,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Contact = forwardRef((props, ref) => {
  const [recipientName, setRecipientName] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const formData = {
      from_name: e.target.elements.from_name.value,
      to_name: recipientName,
      message: e.target.elements.message.value,
      user_email: e.target.elements.user_email.value,
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
      mt={20}
      maxW="container.xl"
      p={8}
      borderRadius="lg"
      boxShadow="sm"
      shadow="xl"
      fontFamily="Allrounder Monument Test"
      ref={ref}
    >
      <FormControl as="form" onSubmit={handleSubmit}>
        <Flex direction={["column", "row"]} gap={6} mb={6}>
          <Flex direction="column" flex="1">
            <FormLabel color="#5a351d" fontSize="lg" mt={2}>
              {t("first_name")}
            </FormLabel>
            <Input
              size="lg"
              name="from_name"
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
              name="to_name"
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
