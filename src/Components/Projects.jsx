// import React from "react";
// import {
//   Box,
//   Text,
//   Grid,
//   useBreakpointValue,
//   Flex,
//   VStack,
//   Image,
//   Button,
// } from "@chakra-ui/react";
// import SpaceOdyssey from "../images/Space-Odyssey.png";
// import CreditWave from "../images/CreditWave.png";
// import Trendio from "../images/Trendio.png";
// import Travelcard from "../images/TravelCard.png";
// import Aspireo from "../images/Aspireo.png";
// import CodeGenius from "../images/CodeGenius.png";

// const projectsData = [

//   {
//     title: "Dynamics 365 – Box Integration",
//     //image: DynamicsBox,
//     description:
//       "Enterprise integration connecting Microsoft Dynamics 365 with Box for secure document management and automated file workflows.",
//     techStacks:
//       "C#, JavaScript, Dynamics 365, Box, REST APIs, Plugins",
//     features: [
//       "File Request functionality",
//       "Add-to-Email automation",
//       "Box Sign integration",
//       "User-based folder visibility",
//       "Permission and security role management",
//     ],
//   },

//   {
//     title: "Dynamics 365 – Documentum D2 Integration",
//     // image: DynamicsDocumentum,
//     description:
//       "Enterprise content management integration between Dynamics 365 and OpenText Documentum D2 with secure authentication and document workflows.",
//     techStacks:
//       "C#, JavaScript, Dynamics 365, Documentum D2, OTDS, REST APIs",
//     features: [
//       "OTDS authentication and SSO",
//       "Custom APIs and plugins",
//       "Embedded web resources",
//       "Metadata inheritance",
//       "Permission and security enhancements",
//     ],
//   },

//   {
//     title: "Dynamics F&O – Box & xECM Integration",
//     // image: DynamicsFO,
//     description:
//       "Enterprise integration solution connecting Dynamics 365 Finance & Operations with Box and OpenText xECM using configurable and secure integration architecture.",
//     techStacks:
//       "C#, Dynamics F&O, Box, OpenText xECM, REST APIs",
//     features: [
//       "Table-driven dynamic configuration",
//       "Workspace management utilities",
//       "Category handling",
//       "Encrypted configuration management",
//       "Multi-environment deployment",
//     ],
//   },

//   {
//     title: "TCCI Migration Project",
//     // image: TCCI,
//     description:
//       "Document migration solution for converting annotations and document metadata during migration from FileNet to Intelligent Viewer.",
//     techStacks:
//       "Java, Eclipse, Imaging APIs, Intelligent Viewer",
//     features: [
//       "Annotation conversion framework",
//       "Multiple annotation type support",
//       "Dynamic DPI scaling",
//       "Page extent mapping",
//       "Document coordinate transformation",
//     ],
//   },

//   {
//     title: "MurphyUSA – Intelligent Capture",
//     //image: MurphyUSA,
//     description:
//       "Intelligent document capture solution for processing vendor documents through classification, template handling, and automated extraction workflows.",
//     techStacks:
//       "Intelligent Capture, Document Processing, Classification, Extraction",
//     features: [
//       "Dynamic vendor template handling",
//       "Document classification",
//       "Data extraction enhancements",
//       "Capture workflow improvements",
//       "Production deployment",
//     ],
//   },

//   {
//     title: "Indigenous Services Canada – DbUserSync",
//     // image: DbUserSync,
//     description:
//       "C# and SQL-based synchronization utility for automating user synchronization between OTCS and SQL Server environments.",
//     techStacks:
//       "C#, .NET, SQL Server, Windows Task Scheduler",
//     features: [
//       "OTCS to SQL user synchronization",
//       "Automated scheduled execution",
//       "Encryption/decryption",
//       "SQL-based data retrieval",
//       "Synchronization performance optimization",
//     ],
//   },
//   {
//     title: "Aspireo",
//     image: Aspireo,
//     description: "Aspireo is an online task management web application",
//     githubLink: "https://github.com/Leeladhar206/smart-city-pulse-8901",
//     liveAppLink: "https://aspireo.vercel.app/",
//     techStacks: "MongoDB, Express, React, Node",
//   },
//   {
//     title: "Trendio",
//     image: Trendio,
//     description: "Online fashion website, offering curated trends and styles.",
//     githubLink: "https://github.com/suriyasingaravel/handy-string-7765",
//     liveAppLink:
//       "https://651c286aa4b175366a4b5e5d--lively-alpaca-0e97c3.netlify.app/",
//     techStacks: "React, Redux, Chakra UI",
//   },
//   {
//     title: "CodeGenius",
//     image: CodeGenius,
//     description:
//       "Real-time virtual interviewing website with ChatGPT integration.",
//     githubLink: "https://github.com/Leeladhar206/codeGenius",
//     liveAppLink: "https://code-genius-front-yc8a.vercel.app/",
//     techStacks: "MongoDB, Express, React, Node",
//   },
//   {
//     title: "Credit Wave ",
//     image: CreditWave,
//     description:
//       "Online platform for credit card users, facilitating online payments.",
//     githubLink: "https://github.com/Leeladhar-290/striped-substance-4459",
//     liveAppLink: "https://creditcardwave.netlify.app/",
//     techStacks: "React, Chakra UI",
//   },
//   {
//     title: "Space Odyssey",
//     image: SpaceOdyssey,
//     description:
//       "Online travel agency that provides info about hotels and bus fares.",
//     githubLink: "https://github.com/Leeladhar-290/windy-picture-8509",
//     liveAppLink: "https://warm-fairy-4fe5e3.netlify.app/index.html",
//     techStacks: "HTML, CSS, JS",
//   },
//   {
//     title: "Travel card",
//     image: Travelcard,
//     description:
//       "Online travel agency application designed to facilitate hotel info.",
//     githubLink: "https://github.com/mdmukhtarmohsin/rainy-scissors-3404",
//     liveAppLink:
//       "https://64be25e391c0a33046f95a56--incandescent-kashata-99b213.netlify.app/index.html",
//     techStacks: "HTML, CSS, JS",
//   },
// ];

// export const Projects = () => {
//   const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

//   return (
//     <Box mt={10} id="projects" w={"90%"} m="auto" mb={10}>
//       <Text
//         fontSize={"3xl"}
//         fontWeight={500}
//         textAlign={"center"}
//         mb={10}
//         mt={10}
//       >
//         Projects
//       </Text>
//       <Grid
//         templateColumns={`repeat(${columns}, 1fr)`}
//         w={{ base: "100%", md: "85%" }}
//         gridRowGap={8}
//         m="auto"
//       >
//         {projectsData.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// const ProjectCard = ({
//   title,
//   image,
//   description,
//   githubLink,
//   liveAppLink,
//   techStacks,
// }) => {
//   return (
//     <Flex
//       className="project-card"
//       borderWidth="1px"
//       borderRadius="xl"
//       border="1px solid #06113C"
//       boxShadow={"xl"}
//       m="auto"
//       w="90%"
//       p={4}
//       _hover={{
//         bg: "#06113C",
//         color: "#E6E7EB",
//         transform: "scale(1.01)",
//       }}
//       transition="transform 0.3s ease"
//     >
//       <VStack align="start" flex="1" overflow="hidden" borderRadius={"5px"}>
//         {image && (
//           <Image
//             src={image}
//             alt={title}
//             borderRadius="5px"
//           />
//         )}
//         <Text
//           className="project-title"
//           fontSize="xl"
//           fontWeight="semibold"
//           mt={2}
//           ml={2}
//         >
//           {title}
//         </Text>
//         <Text
//           className="project-tech-stack"
//           fontSize="md"
//           fontWeight={500}
//           ml={2}
//         >
//           {techStacks}
//         </Text>
//         <Text
//           className="project-description"
//           mb="4"
//           ml={2}
//           fontSize={{ base: "sm", md: "md" }}
//           fontWeight={400}
//         >
//           {description}
//         </Text>
//         <Flex ml={2} mb={4}>
//           <Button
//             className="project-github-link"
//             as="a"
//             href={githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             isExternal
//             colorScheme="#0a3543"
//             variant="outline"
//             _hover={{
//               color: "#06113C",
//               bg: "#E6E7EB",
//             }}
//             mr="4"
//             size={"sm"}
//           >
//             GitHub
//           </Button>
//           <Button
//             className="project-deployed-link"
//             as="a"
//             href={liveAppLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             isExternal
//             colorScheme="#0a3543"
//             variant="outline"
//             _hover={{
//               color: "#06113C",
//               bg: "#E6E7EB",
//             }}
//             size={"sm"}
//           >
//             Live
//           </Button>
//         </Flex>
//       </VStack>
//     </Flex>
//   );
// };


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

// Reva project images can be added later.
// If there is no image, simply don't add the `image` property.

const projectsData = [
  // =====================================================
  // ENTERPRISE PROJECTS
  // =====================================================
  {
    title: "Dynamics 365 – Box Integration",
    techStacks:
      "C#, JavaScript, Dynamics 365, Box, REST APIs, Plugins",
    description:
      "Enterprise integration connecting Microsoft Dynamics 365 with Box for secure document management and automated file workflows. Implemented document operations and user-specific access controls within Dynamics 365.",
    highlights: [
      "Implemented File Request, Add-to-Email, and Box Sign workflows.",
      "Configured folder visibility and permissions based on user security roles.",
    ],
  },

  {
    title: "Dynamics 365 – Documentum D2 Integration",
    techStacks:
      "C#, JavaScript, Dynamics 365, Documentum D2, OTDS, REST APIs",
    description:
      "Enterprise content management integration between Dynamics 365 and OpenText Documentum D2. Developed secure document access and authentication workflows using OTDS and custom integration components.",
    highlights: [
      "Implemented OTDS-based authentication and SSO integration.",
      "Developed custom APIs, plugins, and embedded web resources for document workflows.",
    ],
  },

  {
    title: "Dynamics F&O – Box & xECM Integration",
    techStacks:
      "C#, Dynamics F&O, Box, OpenText xECM, REST APIs",
    description:
      "Enterprise integration connecting Dynamics 365 Finance & Operations with Box and OpenText xECM. Designed configurable integration utilities to support document and workspace operations across environments.",
    highlights: [
      "Built table-driven configuration for flexible workspace and category management.",
      "Implemented encrypted configuration handling and multi-environment deployment support.",
    ],
  },

  {
    title: "TCCI Migration Project",
    techStacks:
      "Java, Eclipse, Imaging APIs, Intelligent Viewer",
    description:
      "Document migration solution for converting annotations and document metadata during migration from FileNet to Intelligent Viewer. Developed conversion logic to preserve document annotations across different imaging formats.",
    highlights: [
      "Supported multiple annotation types with coordinate and page mapping.",
      "Implemented dynamic DPI scaling to maintain annotation positioning and accuracy.",
    ],
  },

  {
    title: "MurphyUSA – Intelligent Capture",
    techStacks:
      "Intelligent Capture, Document Processing, Classification",
    description:
      "Intelligent document capture solution for processing vendor documents through classification, template handling, and automated data extraction workflows. Enhanced capture processing to support varying document formats.",
    highlights: [
      "Implemented dynamic vendor template handling and document classification.",
      "Improved automated data extraction and capture workflow processing.",
    ],
  },

  {
    title: "Indigenous Services Canada – DbUserSync",
    techStacks:
      "C#, .NET, SQL Server, Windows Task Scheduler",
    description:
      "C# and SQL-based synchronization utility for automating user synchronization between OTCS and SQL Server environments. Designed the utility for scheduled and reliable synchronization of user information.",
    highlights: [
      "Implemented automated execution using Windows Task Scheduler.",
      "Added encryption/decryption and optimized SQL-based synchronization processing.",
    ],
  },


  // =====================================================
  // MERN / WEB PROJECTS
  // =====================================================

  {
    title: "Aspireo",
    image: Aspireo,
    description:
      "Task management web application designed to help users organize and manage their tasks efficiently.",
    githubLink:
      "https://github.com/Leeladhar206/smart-city-pulse-8901",
    liveAppLink:
      "https://aspireo.vercel.app/",
    techStacks:
      "MongoDB, Express.js, React, Node.js",
  },

  {
    title: "CodeGenius",
    image: CodeGenius,
    description:
      "Real-time virtual interview platform featuring ChatGPT-powered technical interview assistance.",
    githubLink:
      "https://github.com/Leeladhar206/codeGenius",
    liveAppLink:
      "https://code-genius-front-yc8a.vercel.app/",
    techStacks:
      "MongoDB, Express.js, React, Node.js",
  },

  {
    title: "Trendio",
    image: Trendio,
    description:
      "Online fashion platform offering curated trends and styles with a responsive shopping experience.",
    githubLink:
      "https://github.com/suriyasingaravel/handy-string-7765",
    liveAppLink:
      "https://651c286aa4b175366a4b5e5d--lively-alpaca-0e97c3.netlify.app/",
    techStacks:
      "React, Redux, Chakra UI",
  },

  {
    title: "Credit Wave",
    image: CreditWave,
    description:
      "Online platform for credit card users with features focused on payments and credit card management.",
    githubLink:
      "https://github.com/Leeladhar-290/striped-substance-4459",
    liveAppLink:
      "https://creditcardwave.netlify.app/",
    techStacks:
      "React, Chakra UI",
  },

  {
    title: "Space Odyssey",
    image: SpaceOdyssey,
    description:
      "Travel website providing information about hotels, destinations, and bus fares.",
    githubLink:
      "https://github.com/Leeladhar-290/windy-picture-8509",
    liveAppLink:
      "https://warm-fairy-4fe5e3.netlify.app/index.html",
    techStacks:
      "HTML, CSS, JavaScript",
  },

  {
    title: "Travel Card",
    image: Travelcard,
    description:
      "Travel agency application designed to provide hotel information and support travel planning.",
    githubLink:
      "https://github.com/mdmukhtarmohsin/rainy-scissors-3404",
    liveAppLink:
      "https://64be25e391c0a33046f95a56--incandescent-kashata-99b213.netlify.app/index.html",
    techStacks:
      "HTML, CSS, JavaScript",
  },
];

export const Projects = () => {
  const columns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  });

  return (
    <Box
      mt={10}
      id="projects"
      w={{ base: "92%", md: "90%" }}
      maxW="1400px"
      m="auto"
      mb={12}
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight={500}
        textAlign="center"
        mb={{ base: 6, md: 10 }}
        mt={10}
      >
        Projects
      </Text>

      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={{ base: 5, md: 7, lg: 8 }}
        w="100%"
        alignItems="stretch"
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
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
  const hasImage = Boolean(image);

  return (
    <Flex
      className="project-card"
      direction="column"
      border="1px solid #06113C"
      borderRadius="xl"
      boxShadow="lg"
      m="auto"
      w="100%"
      minH={hasImage ? "auto" : { base: "330px", md: "370px" }}
      overflow="hidden"
      bg="#E6E7EB"
      _hover={{
        bg: "#06113C",
        color: "#E6E7EB",
        transform: "translateY(-4px)",
        boxShadow: "2xl",
      }}
      transition="all 0.3s ease"
    >
      <VStack
        align="stretch"
        flex="1"
        spacing={0}
      >
        {/* Image projects - keep original image behavior */}
        {hasImage && (
          <Image
            src={image}
            alt={title}
            w="100%"
            h="auto"
            objectFit="contain"
            borderRadius="5px"
          />
        )}

        {/* Content */}
        <Flex
          direction="column"
          flex="1"
          p={4}
        >
          <Text
            className="project-title"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            lineHeight="1.35"
            mt={hasImage ? 0 : 1}
            mb={2}
          >
            {title}
          </Text>

          <Text
            className="project-tech-stack"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={500}
            lineHeight="1.5"
            mb={3}
          >
            {techStacks}
          </Text>

          <Text
            className="project-description"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={400}
            lineHeight="1.55"
          >
            {description}
          </Text>

          {/* Buttons */}
          {(githubLink || liveAppLink) && (
            <Flex
              mt="auto"
              pt={4}
              gap={3}
            >
              {githubLink && (
                <Button
                  className="project-github-link"
                  as="a"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                  variant="outline"
                  size="sm"
                  borderColor="currentColor"
                  _hover={{
                    color: "#06113C",
                    bg: "#E6E7EB",
                  }}
                >
                  GitHub
                </Button>
              )}

              {liveAppLink && (
                <Button
                  className="project-deployed-link"
                  as="a"
                  href={liveAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                  variant="outline"
                  size="sm"
                  borderColor="currentColor"
                  _hover={{
                    color: "#06113C",
                    bg: "#E6E7EB",
                  }}
                >
                  Live
                </Button>
              )}
            </Flex>
          )}
        </Flex>
      </VStack>
    </Flex>
  );
};