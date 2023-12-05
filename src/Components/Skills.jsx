
import React from 'react';
import { Flex, Box, Text, Image, VStack } from '@chakra-ui/react';
import html from '../skill_icons/HTML.svg';
import css from '../skill_icons/CSS.svg';
import js from '../skill_icons/JS.svg';
import react from '../skill_icons/React.svg';
import chakra from '../skill_icons/icons8-chakra-ui (1).svg';
import node from '../skill_icons/Node.svg';
import mongo from '../skill_icons/Mongo.svg';
import express from '../skill_icons/Express.svg';
import git from '../skill_icons/GIT.svg';
import redux from '../skill_icons/Redux.svg';

const skillsData = [
  { title: 'HTML5', image: html },
  { title: 'CSS3', image: css },
  { title: 'JavaScript', image: js },
  { title: 'React', image: react },
  { title: 'Redux', image: redux },
  { title: 'Chakra UI', image: chakra },
  { title: 'Git', image: git },
  { title: 'Node.js', image: node },
  { title: 'Express.js', image: express },
  { title: 'MongoDB', image: mongo },
];

export const Skills = () => {
  return (
    <Box mt="6" id='skills'>
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Skills
      </Text>
      <Flex flexWrap='wrap' justify="space-between">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} title={skill.title} image={skill.image} />
        ))}
      </Flex>
    </Box>
  );
};

const SkillCard = ({ title, image }) => {
  return (
    <VStack
      align="center"
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p="4"
      m="2"
      maxW="200px"
      className="skills-card"
    >
      <Image className="skills-card-img" src={`${image}`} alt={title} boxSize="50px" />
      <Text className="skills-card-name" mt="2" fontWeight="semibold">
        {title}
      </Text>
    </VStack>
  );
};

