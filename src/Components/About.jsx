
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'             
import { Link as ChakraLink } from "@chakra-ui/react";
import { Box, Button, Text } from '@chakra-ui/react'

export const About = () => {

  const newFont = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`


const resumedown = () => {
  window.open(
    "https://drive.google.com/file/d/1qF_M6h2dF8Iq_bppQxJJgb8homqBGlT-/view?usp=sharing",
    "_blank"
  )
};

  return (

<Box
      fontFamily="Poppins, sans-serif"
      fontSize="md"
      pl={5}
      pr={5}
      mt={-5}
      width="80%" 
      m='auto'
    id='about' 
    className="about section"
    >
           <Box dangerouslySetInnerHTML={{ __html: newFont }} 
       textAlign={'left'}

      />
        <Box>
        <Text fontSize={'3xl'} fontWeight={500} textAlign={'center'}>About</Text>


         <Box w="80%" display='flex' >
          <Box border={'1px solid black'}>
          <Text fontSize="5xl" fontWeight={800} mt={6}>
            1200+
          </Text>
          <Text>Hours of Coding</Text>
            
          </Box>
          <Box border={'1px solid black'}>
 
          <Text fontSize="5xl" fontWeight={800} mt={6}>
            4+
          </Text>
          <Text>Solo+Group Projects</Text>
          </Box>
          <Box border={'1px solid black'}>
          <Text fontSize="5xl" fontWeight={800} mt={6}>
            600+
          </Text>
          <Text>DSA Problems</Text> 
          </Box>
         </Box>
 

          </Box>

          <Box 
          id="user-detail-intro" 
          >

          <Text >Aspiring Full Stack Developer with Expertise in CSS, HTML, JS, and React. Experienced in solo and team projects. Strong problem-solving and communication skills. Ready to play a role in impactful web development endeavors.</Text>  
          </Box>


         <Button
          id="resume-button-2"
           onClick={resumedown}
        >
          <ChakraLink as={ReactRouterLink}
          id="resume-link-2"
          className="nav-link resume"
         to="https://drive.google.com/uc?export=download&id=1qF_M6h2dF8Iq_bppQxJJgb8homqBGlT-"
         >Resume
         </ChakraLink>

        </Button>

    </Box>
  )
}

// const resumedown = () => {
//   window.open(
//     "https://drive.google.com/file/d/1LEavLeWVKUxh7xzOQUcBGw7SJhje8zxv/view?usp=sharing",
//     "_blank"
//   )
// };
// <button
//           id="resume-button-1"
       
//            onClick={resumedown}
//         >
//           <Link onClick={()=>goTo(false)} 
//           id="resume-link-1"
//         className="nav-link resume"
//          to="https://drive.google.com/uc?export=download&id=1LEavLeWVKUxh7xzOQUcBGw7SJhje8zxv"
//       >Resume</Link>
       
//         </button>