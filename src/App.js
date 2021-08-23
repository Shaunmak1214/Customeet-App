import { Flex, VStack } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/image'
import './App.css';
import Header from './components/Header';
import Seperator from './components/Seperator';

import LandingSplash from './assets/svgs/landing.svg';

function App() {
  return (
    <Flex w="100wv" flexDir="column" alignItems="center" >
      <VStack w="container.xl" >
        <Header />
        <br></br><br></br>
        <Image src={LandingSplash} alt="Splash Image" />
      </VStack>

      <br></br><br></br>

      <Seperator>
        Customize your google meet as much as you want
      </Seperator>

    </Flex>
  );
}

export default App;
