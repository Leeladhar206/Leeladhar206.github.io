import React from "react";
import { Box, Button, Text, Icon } from "@chakra-ui/react";
import Resume from "../resume/Jagarapu-Leeladhar-Resume.pdf";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const About = () => {
  const newFont = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`;

  return (
    <Box
      fontFamily="Lexend, sans-serif"
      fontSize="md"
      pl={5}
      pr={5}
      mt={-3}
      width="80%"
      m="auto"
      id="about"
      className="about section"
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} textAlign={"left"} />
      <Box>
        <Text fontSize={"3xl"} fontWeight={500} textAlign={"center"} mb={10}>
          About
        </Text>

        <Box
          w={{ base: "100%", md: "90%", lg: "70%" }}
          display="flex"
          justifyContent={"space-between"}
          textAlign={"center"}
          margin={"auto"}
          gap={{ base: "10px", md: "none" }}
        >
          <Box
            p={3}
            border="1px solid #06113C"
            borderRadius="lg"
            boxShadow="lg"
            w={{ base: "90px", md: "150px", lg: "170px" }}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
              transform: "scale(1.02)",
            }}
            transition="transform 0.3s ease"
          >
            <Text
              fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}
              fontWeight={500}
              mt={4}
            >
              1200+
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }} mt={2}>
              Hours of Coding
            </Text>
          </Box>
          <Box
            p={2}
            border="1px solid #06113C"
            borderRadius="lg"
            boxShadow="lg"
            w={{ base: "90px", md: "150px", lg: "170px" }}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
              transform: "scale(1.02)",
            }}
            transition="transform 0.3s ease"
          >
            <Text
              fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}
              fontWeight={500}
              mt={5}
            >
              6+
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }} mt={2}>
              Solo and Group
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>Projects</Text>
          </Box>
          <Box
            p={2}
            border="1px solid #06113C"
            borderRadius="lg"
            boxShadow="lg"
            w={{ base: "90px", md: "150px", lg: "170px" }}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
              transform: "scale(1.02)",
            }}
            transition="transform 0.3s ease"
          >
            <Text
              fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}
              fontWeight={500}
              mt={5}
            >
              600+
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }} mt={3}>
              DSA Problems
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        id="user-detail-intro"
        w={{ base: "100%", md: "90%", lg: "70%" }}
        margin={"auto"}
      >
        <Text mt={8} p={1} fontSize={{ base: "14px", lg: "18px" }}>
          Aspiring Full Stack Developer with Expertise in CSS, HTML, JS, and
          React. Experienced in solo and team projects. Strong problem-solving
          and communication skills. Ready to play a role in impactful web
          development endeavors.
        </Text>
      </Box>

      <Box
        w={{ base: "100%", md: "90%", lg: "70%" }}
        margin={"auto"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        pr={2}
      >
        <Text
          mt={4}
          p={1}
          fontSize={{ base: "14px", lg: "18px" }}
          fontWeight={300}
        >
          Click on buttons to know more
        </Text>

        <Box display="flex" gap={3}>
          <Button
            border="1px solid #06113C"
            bg="#E6E7EB"
            display="flex"
            borderRadius="lg"
            p={1}
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
            }}
          >
            <Icon w="20px" h="20px" as={FaGithub} />
            <Link
              id="contact-github"
              to="https://github.com/Leeladhar206"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text ml={2} mt={1} mr={2}>
                Github
              </Text>
            </Link>
          </Button>

          <Button
            id="resume-button-2"
            className="nav-link resume"
            as="a"
            mr={3}
            mb={2}
            href="https://drive.google.com/file/d/1h7O1jwWdCbvboFWRjhfksp4z0FgWr_Mr/view?usp=sharing"
            target="_blank"
            onClick={() => {
              const link = document.createElement("a");
              link.href = Resume;
              link.setAttribute("download", "Jagarapu-Leeladhar-Resume.pdf");
              link.click();
            }}
            colorScheme="#06113C"
            variant="outline"
            _hover={{
              bg: "#06113C",
              color: "#E6E7EB",
            }}
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
