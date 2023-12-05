
import Navbar from './Components/Navbar';
import { Skills } from './Components/Skills';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import {Github} from './Components/Github';
import { Box } from '@chakra-ui/react';

function App() {

  return (

    <Box
      bg="#E6E7EB"
      color="#06113C"
    >
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

