
import {
    Box,
    Text,
    VStack,
    Image,
    Grid,
    useBreakpointValue,
} from "@chakra-ui/react";

// Development & Collaboration
import git from "../skill_icons/Git.svg";
import github from "../skill_icons/GitHub.svg";
import bitbucket from "../skill_icons/BitBucket-Dark.svg";
import visualStudio from "../skill_icons/VisualStudio-Dark.svg";
import vsCode from "../skill_icons/VSCode-Dark.svg";
import eclipse from "../skill_icons/Eclipse-Dark.svg";
import postman from "../skill_icons/Postman.svg";
import jira from "../skill_icons/Jira.svg";

// Microsoft & Enterprise Platforms
import dynamics365 from "../skill_icons/Microsoft-Dynamics-365.svg";
import powerApps from "../skill_icons/Power-Apps.svg";
import sharepoint from "../skill_icons/SharePoint.svg";
import dynamicsFO from "../skill_icons/Dynamics-F-O.svg";

// Content & Document Management
import box from "../skill_icons/Box.svg";
import documentum from "../skill_icons/Documentum.svg";
import intelligentCapture from "../skill_icons/Intelligent-Capture.svg";
import otIntelligentViewer from "../skill_icons/OT-Intelligent-Viewer.svg";

// Infrastructure / Cloud
import vmware from "../skill_icons/VMware.svg";
import gcp from "../skill_icons/GCP-Dark.svg";

const toolsData = [
    // Development & Collaboration
    { title: "Microsoft Dynamics 365", image: dynamics365 },
    { title: "Dynamics 365 F&O", image: dynamicsFO },
    { title: "MS Power Apps", image: powerApps },
    { title: "Box", image: box },
    { title: "Documentum", image: documentum },
    { title: "Intelligent Capture", image: intelligentCapture },
    { title: "OT Intelligent Viewer", image: otIntelligentViewer },
    { title: "Google Cloud Platform", image: gcp },
    { title: "VMware", image: vmware },
    { title: "SharePoint", image: sharepoint },
    { title: "Jira", image: jira },

    { title: "Git", image: git },
    { title: "GitHub", image: github },
    { title: "Bitbucket", image: bitbucket },
    { title: "Visual Studio", image: visualStudio },
    { title: "VS Code", image: vsCode },
    { title: "Eclipse", image: eclipse },
    { title: "Postman", image: postman },

    // Microsoft & Enterprise Platforms

    // Content & Document Management

    // Infrastructure / Cloud
];

const Tools = () => {
    const toolsPerRow = useBreakpointValue({
        base: 3,
        md: 4,
        lg: 5,
    });

    return (
        <Box
            id="tools"
            w={{ base: "90%", md: "90%", lg: "60%" }}
            margin="auto"
            mt={10}
        >
            <Text
                fontSize="3xl"
                fontWeight={500}
                textAlign="center"
                mb={6}
            >
                Tools & Platforms
            </Text>

            <Grid
                templateColumns={`repeat(${toolsPerRow}, 1fr)`}
                gap={{ base: 3, md: 5, lg: 7 }}
                justifyContent="space-between"
                p={5}
            >
                {toolsData.map((tool, index) => (
                    <ToolCard
                        key={index}
                        title={tool.title}
                        image={tool.image}
                    />
                ))}
            </Grid>
        </Box>
    );
};

const ToolCard = ({ title, image }) => {
    return (
        <VStack
            align="center"
            border="1px solid #06113C"
            borderRadius="lg"
            boxShadow="lg"
            m={3}
            maxW="160px"
            className="tools-card"
            _hover={{
                bg: "#06113C",
                color: "#E6E7EB",
                transform: "scale(1.02)",
            }}
            transition="transform 0.3s ease"
        >
            <Image
                className="tools-card-img"
                src={image}
                alt={title}
                boxSize={{ base: "30px", md: "50px" }}
                mt={{ base: 3, md: 7 }}
                objectFit="contain"
            />

            <Text
                className="tools-card-name"
                mt={{ base: 1, md: 3 }}
                mb={{ base: 1, md: 3 }}
                px={2}
                fontSize={{ base: "10px", md: "md" }}
                fontFamily="Poppins, sans-serif"
                textAlign="center"
            >
                {title}
            </Text>
        </VStack>
    );
};

export default Tools;