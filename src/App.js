
import Navbar from './Components/Navbar';
import { Skills } from './Components/Skills';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import {Github} from './Components/Github';
import { Box } from '@chakra-ui/react';

function App() {

  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Lexend:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`

  return (

    <Box
      bg="#E6E7EB"
      color="#06113C"
      fontFamily="Lexend, sans-serif"
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} 
      />
        <Navbar/>
         <Home/>
         <About/>
        <Skills/>
        <Projects/>
        <Github/>
        <Contact/>
    </Box>

  );
}

export default App;

