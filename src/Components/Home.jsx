import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import picture from '../images/professionalPic.jpg'


export const Home = () => {


    const newFont = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`

  return (


<Box
      fontFamily="Comfortaa, sans-serif"
      fontSize="md"
      padding={5}
      width="80%"
      m='auto'
    id='home' 
    display={'flex'}
    flexDirection={{base:'column', md:'row'}}
    justifyContent={'row-start'}
    alignItems={'center'}
    h= '450px'
    pl={10}
    pr={10}
    gap={{base:8, md:0}}
    textAlign={{base:"center", md:"left"}}
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} 
       textAlign={'left'}
      />
            <Box w='10%' display={{base:"none",xl:"block"}}/>

          <Box>
            <Text  fontSize={'1xl'} fontFamily={"Lexend, sans-serif"} fontWeight={400} ml={2}>Hi, I'm</Text>
            
            <Text
              fontSize={{ base: "1xl", md: "2xl", xl: "5xl" }}
              fontWeight={500}
              fontFamily={"Outfit, sans-serif"}
              id="user-detail-name"
            >
            Jagarapu Leeladhar
            </Text>
            <Text  fontSize={'1xl'} fontFamily={"Lexend, sans-serif"} fontWeight={400} ml={2}>An aspiring</Text>

            <Text  fontSize={{ base: "1xl", md: "2xl", xl: "4xl" }} fontFamily={"Lexend, sans-serif"} fontWeight={500}> Full Stack Web Developer</Text>
        
            </Box>
            <Box w='20%' display={{base:"none",md:"block"}}/>

    <Box>
  <Image  borderRadius={'50%'} className="home-img" w="200px" src={picture} alt="image"/>
  </Box>           
    </Box>
  )
}