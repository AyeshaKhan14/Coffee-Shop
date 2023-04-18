import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { AllRoutes } from './Components/AllRoutes';
import { Footer } from './Components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App">
      <Nav/>
      <AllRoutes/>
      <Footer/>
    </Box>
  );
}

export default App;
