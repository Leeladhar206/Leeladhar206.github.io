import React from "react";
import {
  Box,
  Text,
  Grid,
  useBreakpointValue,
  Flex,
  VStack,
  Image,
  Button,
} from "@chakra-ui/react";
import SpaceOdyssey from "../images/Space-Odyssey.png";
import CreditWave from "../images/CreditWave.png";
import Trendio from "../images/Trendio.png";
import Travelcard from "../images/TravelCard.png";
import Aspireo from "../images/Aspireo.png";
import CodeGenius from "../images/CodeGenius.png";

const projectsData = [
  {
    title: "Aspireo",
    image: Aspireo,
    description: "Aspireo is an online task management web application",
    githubLink: "https://github.com/Leeladhar206/smart-city-pulse-8901",
    liveAppLink: "https://aspireo.vercel.app/",
    techStacks: "MongoDB, Express, React, Node",
  },
  {
    title: "Trendio",
    image: Trendio,
    description: "Online fashion website, offering curated trends and styles.",
    githubLink: "https://github.com/suriyasingaravel/handy-string-7765",
    liveAppLink:
      "https://651c286aa4b175366a4b5e5d--lively-alpaca-0e97c3.netlify.app/",
    techStacks: "React, Redux, Chakra UI",
  },
  {
    title: "CodeGenius",
    image: CodeGenius,
    description:
      "Real-time virtual interviewing website with ChatGPT integration.",
    githubLink: "https://github.com/Leeladhar206/codeGenius",
    liveAppLink: "https://code-genius-front-yc8a.vercel.app/",
    techStacks: "MongoDB, Express, React, Node",
  },
  {
    title: "Credit Wave ",
    image: CreditWave,
    description:
      "Online platform for credit card users, facilitating online payments.",
    githubLink: "https://github.com/Leeladhar-290/striped-substance-4459",
    liveAppLink: "https://creditcardwave.netlify.app/",
    techStacks: "React, Chakra UI",
  },
  {
    title: "Space Odyssey",
    image: SpaceOdyssey,
    description:
      "Online travel agency that provides info about hotels and bus fares.",
    githubLink: "https://github.com/Leeladhar-290/windy-picture-8509",
    liveAppLink: "https://warm-fairy-4fe5e3.netlify.app/index.html",
    techStacks: "HTML, CSS, JS",
  },
  {
    title: "Travel card",
    image: Travelcard,
    description:
      "Online travel agency application designed to facilitate hotel info.",
    githubLink: "https://github.com/mdmukhtarmohsin/rainy-scissors-3404",
    liveAppLink:
      "https://64be25e391c0a33046f95a56--incandescent-kashata-99b213.netlify.app/index.html",
    techStacks: "HTML, CSS, JS",
  },
];

export const Projects = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box mt={10} id="projects" w={"90%"} m="auto" mb={10}>
      <Text
        fontSize={"3xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
      >
        Projects
      </Text>
      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        w={{ base: "100%", md: "85%" }}
        gridRowGap={8}
        m="auto"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </Box>
  );
};

const ProjectCard = ({
  title,
  image,
  description,
  githubLink,
  liveAppLink,
  techStacks,
}) => {
  return (
    <Flex
      className="project-card"
      borderWidth="1px"
      borderRadius="xl"
      border="1px solid #06113C"
      boxShadow={"xl"}
      m="auto"
      w="90%"
      p={4}
      _hover={{
        bg: "#06113C",
        color: "#E6E7EB",
        transform: "scale(1.01)",
      }}
      transition="transform 0.3s ease"
    >
      <VStack align="start" flex="1" overflow="hidden" borderRadius={"5px"}>
        <Image src={`${image}`} alt={title} borderRadius={"5px"} />
        <Text
          className="project-title"
          fontSize="xl"
          fontWeight="semibold"
          mt={2}
          ml={2}
        >
          {title}
        </Text>
        <Text
          className="project-tech-stack"
          fontSize="md"
          fontWeight={500}
          ml={2}
        >
          {techStacks}
        </Text>
        <Text
          className="project-description"
          mb="4"
          ml={2}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight={400}
        >
          {description}
        </Text>
        <Flex ml={2} mb={4}>
          <Button
            className="project-github-link"
            as="a"
            href={githubLink}
            isExternal
            colorScheme="#0a3543"
            variant="outline"
            _hover={{
              color: "#06113C",
              bg: "#E6E7EB",
            }}
            mr="4"
            size={"sm"}
          >
            GitHub
          </Button>
          <Button
            className="project-deployed-link"
            as="a"
            href={liveAppLink}
            isExternal
            colorScheme="#0a3543"
            variant="outline"
            _hover={{
              color: "#06113C",
              bg: "#E6E7EB",
            }}
            size={"sm"}
          >
            Live
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};
