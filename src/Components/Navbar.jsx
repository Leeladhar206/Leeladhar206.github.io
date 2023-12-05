
import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Collapse,
  VStack,
  Text,
  useDisclosure,
  Button,
  Image,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Box,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import logo from "../images/leela dhar (1).png";
import { Link as ReactRouterLink } from 'react-router-dom'             
import { Link as ChakraLink } from "@chakra-ui/react";
import Resume from "../resume/Leeladhar-Resume.pdf";

const Navbar = () => {

  
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`


  const { isOpen, onToggle, onClose } = useDisclosure();
  const [activeSection, setActiveSection] = useState(null);

  const resumedown = () => {
    window.open(
      "https://drive.google.com/file/d/1qF_M6h2dF8Iq_bppQxJJgb8homqBGlT-/view?usp=sharing",
      "_blank"
    )
  };
  

  const scrollTo = (elementId, section) => {
    scroll.scrollTo(document.getElementById(elementId).offsetTop - 60, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
    setActiveSection(section);
    onClose();
  };

  const linkStyles = (section) => ({
    mx: 3,
    textDecoration: 'none',
    color: activeSection === section ? '#A32B36' : '#0a3543',
    cursor: 'pointer',
  });

  const link = document.createElement("a");
  link.className = "resume-link-2";
  link.href = Resume;
  link.setAttribute("download", "Leeladhar-Resume.pdf");
  document.body.appendChild(link);

  return (
    <Flex
    justify="space-between"
    align="flex-end"
      pl={{base:3, lg:10}}
      pr={{base:3, lg:10}}
      bg="#E6E7EB"
      color="#06113C"
      position="sticky"
      top={0}
      zIndex={1000}
      id="nav-menu"
      h={{base:'70px', md:'100px'}}
      boxShadow="0px 2px 2px -2px rgba(0,0,0,0.2)"
      fontFamily="Lexend, sans-serif"
      w={{base:'100%', md:'80%'}}
      m='auto'
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} 
       textAlign={'left'}
      />

      <Collapse in={isOpen} animateOpacity>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch">
                  <Text
                    className="nav-link home"
                    {...linkStyles('home')}
                    onClick={() => scrollTo('home', 'home')}
                  >
                    Home
                  </Text>
                  <Text
                        className="nav-link about"
                    {...linkStyles('about')}
                    onClick={() => scrollTo('about', 'about')}
                  >
                    About
                  </Text>
                  <Text
                       className="nav-link skills"
                    {...linkStyles('skills')}
                    onClick={() => scrollTo('skills', 'skills')}
                  >
                    Skills
                  </Text>
                  <Text
                   className="nav-link projects"
                    {...linkStyles('projects')}
                    onClick={() => scrollTo('projects', 'projects')}
                  >
                    Projects
                  </Text>
                  <Text
                          className="nav-link contact"
                    {...linkStyles('contact')}
                    onClick={() => scrollTo('contact', 'contact')}
                  >
                    Contact
                  </Text>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Collapse>

      <IconButton
        display={{ md: "none" }}
        icon={isOpen ? <FaTimes /> : <FaBars />}
        onClick={onToggle}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        alignItems="center"
        justifyContent="center"
        size="lg"
      />
      <Image
        src={logo}
        alt="Logo"
        boxSize="70px"
        display={{ base: "none", md: "block" }}
      />

      <Flex
        display={{ base: "none", md: "flex" }}
        flex={1}
        align="center"
        justify="space-between"
        fontSize={"md"}
        ml={{base:0, lg:10}}
        mb={2}
      >
        <Text {...linkStyles('home')} onClick={() => scrollTo('home', 'home')}>
          Home
        </Text>
        <Text {...linkStyles('about')} onClick={() => scrollTo('about', 'about')}>
          About
        </Text>
        <Text {...linkStyles('skills')} onClick={() => scrollTo('skills', 'skills')}>
          Skills
        </Text>
        <Text {...linkStyles('projects')} onClick={() => scrollTo('projects', 'projects')}>
          Projects
        </Text>
        <Text {...linkStyles('contact')} onClick={() => scrollTo('contact', 'contact')}>
          Contact
        </Text>
      </Flex>
      <Spacer />

      {/* <Button
        mr={6}
        mb={2}
        id="resume-button-2"
        href={Resume}
        download="Leeladhar-Resume.pdf"
        target="_blank"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1qF_M6h2dF8Iq_bppQxJJgb8homqBGlT-/view?usp=sharing",
            "_blank"
          );
        }}
        colorScheme="#0a3543"
        variant="outline"
        _hover={{
          bg: "#06113C", 
          color: "#E6E7EB",
        }}
      >
        Resume
      </Button> */}

      <Button
          id="resume-button-1"
           onClick={resumedown}
        >
          <ChakraLink as={ReactRouterLink}
          id="resume-link-1"
          className="nav-link resume"
         to="https://drive.google.com/uc?export=download&id=1qF_M6h2dF8Iq_bppQxJJgb8homqBGlT-"
         >Resume
         </ChakraLink>

        </Button>
    </Flex>
  );
};

export default Navbar;
