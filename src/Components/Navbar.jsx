import React from "react";
import {
  Flex,
  IconButton,
  Collapse,
  VStack,
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
import logo from "../images/logo.png";
import { Link as ChakraLink } from "@chakra-ui/react";
import Resume from "../resume/Jagarapu-Leeladhar-Resume.pdf";

const Navbar = () => {
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`;

  const { isOpen, onToggle, onClose } = useDisclosure();

  const scrollTo = (elementId, section) => {
    scroll.scrollTo(document.getElementById(elementId).offsetTop - 130, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
    onClose();
  };

  return (
    <Box w='100%'
    bg="#E6E7EB"
    position="sticky"
      top={0}
      zIndex={1000}
    >
    <Flex
      justify="space-between"
      align="flex-end"
      pl={{ base: 3, lg: 10 }}
      pr={{ base: 3, lg: 10 }}
      pb={2}
      bg="#E6E7EB"
      color="#06113C"
      position="sticky"
      top={0}
      zIndex={1000}
      id="nav-menu"
      h={{ base: "70px", md: "100px" }}
      boxShadow="0px 2px 2px -2px rgba(0,0,0,0.2)"
      fontFamily="Lexend, sans-serif"
      w={{ base: "100%", md: "80%" }}
      m="auto"
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} textAlign={"left"} />

      <Collapse in={isOpen} animateOpacity>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent color="#06113C" bg="#E6E7EB">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={8} align="stretch">
                  <ChakraLink
                    className="nav-link home"
                    onClick={() => scrollTo("home")}
                    mx={3}
                    textDecoration="none"
                    fontSize={"lg"}
                    fontWeight={400}
                  >
                    Home
                  </ChakraLink>
                  <ChakraLink
                    className="nav-link about"
                    onClick={() => scrollTo("about")}
                    textDecoration="none"
                    mx={3}
                    fontSize={"lg"}
                    fontWeight={400}
                  >
                    About
                  </ChakraLink>
                  <ChakraLink
                    className="nav-link skills"
                    onClick={() => scrollTo("skills")}
                    mx={3}
                    textDecoration="none"
                    fontSize={"lg"}
                    fontWeight={400}
                  >
                    Skills
                  </ChakraLink>
                  <ChakraLink
                    className="nav-link projects"
                    onClick={() => scrollTo("projects")}
                    mx={3}
                    textDecoration="none"
                    fontSize={"lg"}
                    fontWeight={400}
                  >
                    Projects
                  </ChakraLink>
                  <ChakraLink
                    className="nav-link contact"
                    onClick={() => scrollTo("contact")}
                    mx={3}
                    textDecoration="none"
                    fontSize={"lg"}
                    fontWeight={400}
                  >
                    Contact
                  </ChakraLink>
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
        ml={{ base: 0, md: 10 }}
        mb={2}
        gap={{ base: "10px", md: "none" }}
      >
        <ChakraLink
          className="nav-link home"
          onClick={() => scrollTo("home")}
          mx={3}
          textDecoration="none"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bottom: "-3px",
            height: "2px",
            width: "100%",
            backgroundColor: "#06113C",
            opacity: "0.7",
            borderRadius: "40px",
            transform: "scaleX(0)",
            transition: "transform 0.2s linear",
          }}
          _hover={{
            "&::before": {
              transform: "scaleX(1)",
            },
          }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          className="nav-link about"
          onClick={() => scrollTo("about")}
          mx={3}
          textDecoration="none"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bottom: "-3px",
            height: "2px",
            width: "100%",
            backgroundColor: "#06113C",
            opacity: "0.7",
            borderRadius: "40px",
            transform: "scaleX(0)",
            transition: "transform 0.2s linear",
          }}
          _hover={{
            "&::before": {
              transform: "scaleX(1)",
            },
          }}
        >
          About
        </ChakraLink>
        <ChakraLink
          className="nav-link skills"
          onClick={() => scrollTo("skills")}
          mx={3}
          textDecoration="none"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bottom: "-3px",
            height: "2px",
            width: "100%",
            backgroundColor: "#06113C",
            opacity: "0.7",
            borderRadius: "40px",
            transform: "scaleX(0)",
            transition: "transform 0.2s linear",
          }}
          _hover={{
            "&::before": {
              transform: "scaleX(1)",
            },
          }}
        >
          Skills
        </ChakraLink>
        <ChakraLink
          className="nav-link projects"
          onClick={() => scrollTo("projects")}
          mx={3}
          textDecoration="none"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bottom: "-3px",
            height: "2px",
            width: "100%",
            backgroundColor: "#06113C",
            opacity: "0.7",
            borderRadius: "40px",
            transform: "scaleX(0)",
            transition: "transform 0.2s linear",
          }}
          _hover={{
            "&::before": {
              transform: "scaleX(1)",
            },
          }}
        >
          Projects
        </ChakraLink>
        <ChakraLink
          className="nav-link contact"
          onClick={() => scrollTo("contact")}
          mx={2}
          textDecoration="none"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bottom: "-3px",
            height: "2px",
            width: "100%",
            backgroundColor: "#06113C",
            opacity: "0.7",
            borderRadius: "40px",
            transform: "scaleX(0)",
            transition: "transform 0.2s linear",
          }}
          _hover={{
            "&::before": {
              transform: "scaleX(1)",
            },
          }}
        >
          Contact
        </ChakraLink>
      </Flex>
      <Spacer />

      <Button
        id="resume-button-1"
        className="nav-link resume"
        as="a"
        // mr={3}
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
    </Flex>
    </Box>
  );
};

export default Navbar;
