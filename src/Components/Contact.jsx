import React from "react";
import { Box, Text, Icon, Grid } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <Box
      textAlign="center"
      mt={10}
      id="contact"
      w={{ base: "90%", lg: "76%" }}
      m="auto"
    >
      <Text
        fontSize={"3xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
      >
        Contact
      </Text>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 4, md: 8 }}
        justifyContent="center"
        w="70%"
        m="auto"
      >
        <Link id="contact-github" to="https://github.com/Leeladhar206">
          <Box
            className="contact-box"
            border="1px solid #06113C"
            display="flex"
            borderRadius="30px"
            p={3}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
              transform: "scale(1.01)",
            }}
            transition="transform 0.3s ease"
          >
            <Icon w="25px" h="25px" as={FaGithub} />
            <Text ml={2}>github.com/Leeladhar206</Text>
          </Box>
        </Link>

        <Box
          id="contact-phone"
          className="contact-box"
          border="1px solid #06113C"
          display="flex"
          borderRadius="30px"
          p={3}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
            transform: "scale(1.01)",
          }}
          transition="transform 0.3s ease"
        >
          <Icon w="25px" h="25px" as={PiPhoneCallFill}>
            /
          </Icon>

          <Text id="contact-phone" ml={2}>
            +91 7997884227
          </Text>
        </Box>

        <Link
          id="contact-linkedin"
          to="https://www.linkedin.com/in/leeladharjagarapu/"
        >
          <Box
            className="contact-box"
            border="1px solid #06113C"
            display="flex"
            borderRadius="30px"
            p={3}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
              transform: "scale(1.01)",
            }}
            transition="transform 0.3s ease"
          >
            <Icon w="25px" h="25px" as={FaLinkedin} />
            <Text ml={2}>in/leeladharjagarapu</Text>
          </Box>
        </Link>

        <Link id="contact-email" to="mailto:leeladharjagarapu@gmail.com">
          <Box
            className="contact-box"
            border="1px solid #06113C"
            display="flex"
            borderRadius="30px"
            p={3}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
              transform: "scale(1.01)",
            }}
            transition="transform 0.3s ease"
          >
            <Icon w="25px" h="25px" as={SiGmail} />

            <Text ml={2}>leeladharjagarapu@gmail.com</Text>
          </Box>
        </Link>
      </Grid>
      <Box mt={10}>
        <Text fontSize={"sm"} fontWeight={400} textAlign={"center"} mt={10}>
          @ Leeladhar Jagarapu. All rights are reserved
        </Text>
      </Box>
    </Box>
  );
};
