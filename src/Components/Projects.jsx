
import React from 'react';
import { Box, Flex, Text, Image, VStack, Link } from '@chakra-ui/react';
import SpaceOdyssey from '../images/Space-Odyssey.png';
import CreditWave from '../images/CreditWave.png';
import Trendio from '../images/Trendio.png';
import Travelcard from '../images/TravelCard.png';

const projectsData = [
  {
    title: 'Trendio',
    image: Trendio,
    description: 'User-friendly online fashion website, offering curated trends and styles for effortless shopping.',
    githubLink: 'https://github.com/suriyasingaravel/handy-string-7765',
    liveAppLink: 'https://651c286aa4b175366a4b5e5d--lively-alpaca-0e97c3.netlify.app/',
    techStacks:'Raect Redux Chakra UI'
  },
  {
    title: 'Credit Wave ',
    image: CreditWave,
    description: 'CreditWave is an online platform for CreditWave credit card users, facilitating online payments.',
    githubLink: 'https://github.com/Leeladhar-290/striped-substance-4459',
    liveAppLink: 'https://creditcardwave.netlify.app/',
    techStacks:'Raect Chakra UI'
  },
  {
    title: 'Space Odyssey',
    image: SpaceOdyssey,
    description: 'Online travel agency application that allows users to explore hotel information.',
    githubLink: 'https://github.com/Leeladhar-290/windy-picture-8509',
    liveAppLink: 'https://warm-fairy-4fe5e3.netlify.app/index.html',
    techStacks:'HTML CSS JS'
  },
  {
    title: 'Travel card',
    image: Travelcard,
    description: 'Travel Card is an online travel agency application designed to facilitate hotel exploration for users.',
    githubLink: 'https://github.com/mdmukhtarmohsin/rainy-scissors-3404',
    liveAppLink: 'https://64be25e391c0a33046f95a56--incandescent-kashata-99b213.netlify.app/index.html',
    techStacks:'HTML CSS JS'
  }

];

export const Projects = () => {
  return (
    <Box mt="6" id="projects">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Projects
      </Text>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

const ProjectCard = ({ title, image, description, githubLink, liveAppLink,techStacks }) => {
  return (
    <Flex  className="project-card"  p="4" borderWidth="1px" borderRadius="lg" mb="4" >
      <Image src={`${image}`} alt={title} w="400px" mr="4" />
      <VStack align="start" flex="1">
        <Text className="project-title" fontSize="xl" fontWeight="semibold" mb="2">
          {title}
        </Text>
        <Text className="project-tech-stack" fontSize="l" fontWeight="semibold"> {techStacks}</Text>
        <Text className="project-description" mb="4">{description}</Text>
        <Flex>
          <Link className="project-github-link" href={githubLink} isExternal mr="4">
            GitHub
          </Link>
          <Link  className="project-deployed-link" href={liveAppLink} isExternal>
            Live App
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

