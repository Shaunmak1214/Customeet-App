import React, {useState, useEffect} from 'react';
import { Flex, VStack, Text, HStack, Center, Link } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/image'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Seperator from './components/Seperator';
import { CustomeetText, CMSpacer } from './utils';

import LandingSplash from './assets/svgs/landing.svg';
import Step1 from './assets/svgs/step-1.svg';
import Step2 from './assets/svgs/step-2.svg';
import Step3 from './assets/svgs/step-3.svg';

function App() {

  const [stepHover, setStepHover] = useState(1);
  const stepImage = [Step1 , Step2, Step3];

  useEffect(() => {
    console.log(stepHover)
  }, [stepHover])

  return (
    <Flex w="100wv" flexDir="column" alignItems="center" >
      <VStack w="container.xl" >
        <Header />
        <CMSpacer size="sm" />
        <Image src={LandingSplash} alt="Splash Image" />
      </VStack>
      <CMSpacer size="sm" />
      <Seperator>
        Customize your google meet as much as you want
      </Seperator>
      <CMSpacer />
      <VStack w="container.xl" >
        <VStack w="100%" alignItems="start" >
          <HStack><Text fontSize="35px" fontWeight="600">How to use</Text><CustomeetText /></HStack>
          <Text fontSize="18px">A technical guide, showing you from 0 to customizing your google meet</Text>
        </VStack>
        <CMSpacer size="sm" />
        <HStack w="100%" alignItems="flex-start">
          <VStack w="50%" spacing="5" alignItems="start" justifyContent="flex-start">
            <VStack onMouseOver={() => { setStepHover(1) }} alignItems="flex-start" cursor="pointer" py="4" px="7" border={stepHover === 1 ? "1px solid #CACACA" : "1px solid #FFFFFF"} borderRadius="15px">
              <Text fontSize="15px" color="#797979">Step 1</Text>
              <Text fontSize="18px">Installing from <Link href="www.google.com" color="#0997FF" >chrome web store</Link> </Text>
            </VStack>
            <VStack onMouseOver={() => { setStepHover(2) }}  alignItems="flex-start" cursor="pointer" py="4" px="7" border={stepHover === 2 ? "1px solid #CACACA" : "1px solid #FFFFFF"} borderRadius="15px">
              <Text fontSize="15px" color="#797979">Step 2</Text>
              <Text fontSize="18px">Pin customeet for easy access.</Text>
            </VStack>
            <VStack onMouseOver={() => { setStepHover(3) }}  alignItems="flex-start" cursor="pointer" py="4" px="7" border={stepHover === 3 ? "1px solid #CACACA" : "1px solid #FFFFFF"} borderRadius="15px">
              <Text fontSize="15px" color="#797979">Step 3</Text>
              <Text fontSize="18px">Customize and update!</Text>
            </VStack>
          </VStack>
          <Center w="50%" alignSelf="center">
            <Image src={stepImage[stepHover - 1]} alt="Splash Image" />
          </Center>
        </HStack>
      </VStack>

      <CMSpacer />

      <VStack w="container.xl">
        <HStack><CustomeetText /><Text fontSize="35px" fontWeight="600">Notable Features</Text></HStack>
        <CMSpacer size="sm" />
        <VStack w="100%">
          <HStack w="100%" alignItems="flex-start" justifyContent="space-between">
            <VStack w="100%" alignItems="flex-start" justifyContent="flex-start">
              <Text fontSize="25px" color="#000000">Pick themes from millions of choices.</Text>
              <Text fontSize="18px" color="#797979">Themes will be available shortly, you can submit and browse themes made from others in the future too!</Text>
            </VStack>
            <Center>
              <Image src={LandingSplash} alt="Splash Image" />
            </Center>
          </HStack>
        </VStack>
        <CMSpacer size="sm" />

        <VStack w="100%">
          <HStack w="100%" alignItems="flex-start" justifyContent="space-between" flexDir="row-reverse" >
            <VStack w="100%" alignItems="flex-end" justifyContent="flex-start">
              <Text textAlign="right" fontSize="25px" color="#000000">Easy to use color picker</Text>
              <Text textAlign="right" fontSize="18px" color="#797979">Customize colors with this easy to use color picker, click and drag, that easy!</Text>
            </VStack>
            <Center>
              <Image src={LandingSplash} alt="Splash Image" />
            </Center>
          </HStack>
        </VStack>
        <CMSpacer size="sm" />

        <VStack w="100%">
          <HStack w="100%" alignItems="flex-start" justifyContent="space-between">
            <VStack w="100%" alignItems="flex-start" justifyContent="flex-start">
              <Text fontSize="25px" color="#000000">Pick themes from millions of choices.</Text>
              <Text fontSize="18px" color="#797979">Themes will be available shortly, you can submit and browse themes made from others in the future too!</Text>
            </VStack>
            <Center>
              <Image src={LandingSplash} alt="Splash Image" />
            </Center>
          </HStack>
        </VStack>
        <CMSpacer size="sm" />

        <VStack w="100%">
          <HStack w="100%" alignItems="flex-start" justifyContent="space-between">
            <VStack w="100%" alignItems="flex-start" justifyContent="flex-start">
              <Text fontSize="25px" color="#000000">Pick themes from millions of choices.</Text>
              <Text fontSize="18px" color="#797979">Themes will be available shortly, you can submit and browse themes made from others in the future too!</Text>
            </VStack>
            <Center>
              <Image src={ LandingSplash } alt="Splash Image" />
            </Center>
          </HStack>
        </VStack>
        <CMSpacer size="sm" />
      </VStack>

      <CMSpacer />

      <Footer />

    </Flex>
  );
}

export default App;
