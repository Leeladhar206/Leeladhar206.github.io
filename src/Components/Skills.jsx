import React from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";

import html from "../skill_icons/HTML.svg";
import css from "../skill_icons/CSS.svg";
import js from "../skill_icons/JS.svg";
import react from "../skill_icons/React.svg";
import chakra from "../skill_icons/icons8-chakra-ui (1).svg";
import node from "../skill_icons/Node.svg";
import mongo from "../skill_icons/Mongo.svg";
import express from "../skill_icons/Express.svg";
import git from "../skill_icons/GIT.svg";
import redux from "../skill_icons/Redux.svg";

const skillsData = [
  { title: "HTML5", image: html },
  { title: "CSS3", image: css },
  { title: "JavaScript", image: js },
  { title: "ChakraUI", image: chakra },
  { title: "Git", image: git },
  { title: "React", image: react },
  { title: "Redux", image: redux },
  { title: "Node.js", image: node },
  { title: "Express.js", image: express },
  { title: "MongoDB", image: mongo },
];

export const Skills = () => {
  const skillsPerRow = useBreakpointValue({ base: 3, md: 4, lg: 5 });

  return (
    <Box
      id="skills"
      w={{ base: "90%", md: "90%", lg: "60%" }}
      margin="auto"
      mt={10}
    >
      <Text fontSize={"3xl"} fontWeight={500} textAlign={"center"} mb={6}>
        Skills
      </Text>

      <Grid
        templateColumns={`repeat(${skillsPerRow}, 1fr)`}
        gap={{ base: 3, md: 5, lg: 7 }}
        justifyContent="space-between"
        p={5}
      >
        {skillsData.map((skill, index) => (
          <SkillCard key={index} title={skill.title} image={skill.image} />
        ))}
      </Grid>
    </Box>
  );
};

const SkillCard = ({ title, image }) => {
  return (
    <VStack
      align="center"
      border="1px solid #06113C"
      borderRadius="lg"
      boxShadow="lg"
      m={3}
      maxW={"160px"}
      className="skills-card"
      _hover={{
        bg: "#06113C",
        color: "#E6E7EB",
        transform: "scale(1.02)",
      }}
      transition="transform 0.3s ease"
    >
      <Image
        className="skills-card-img"
        src={`${image}`}
        alt={title}
        boxSize={{ base: "30px", md: "50px" }}
        mt={{ base: 3, md: 7 }}
      />
      <Text
        className="skills-card-name"
        mt={{ base: 1, md: 3 }}
        mb={{ base: 1, md: 3 }}
        fontSize={{ base: "10px", md: "md" }}
        fontFamily={"Poppins, sans-serif"}
      >
        {title}
      </Text>
    </VStack>
  );
};
