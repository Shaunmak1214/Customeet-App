import React, {useState} from 'react'

import { Flex, VStack, Text,  Center, Link } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/image'
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seperator from '../components/Seperator';
import { CustomeetText, CMSpacer } from '../utils';

import LandingImg from '../assets/pngs/landing-new.png'
import Step1 from '../assets/svgs/step-1.svg';
import Step2 from '../assets/svgs/step-2.svg';
import Step3 from '../assets/svgs/step-3.svg';
import Notable1 from '../assets/svgs/notable-1.svg';
import Notable2 from '../assets/svgs/notable-2.svg';
import Notable3 from '../assets/svgs/notable-3.svg';

const Index = () => {
  const [stepHover, setStepHover] = useState(1);
  const stepImage = [Step1 , Step2, Step3];

  return (
    <Flex w="100%" flexDir="column" alignItems="center" >
      <VStack w="90%" maxW="container.xl" position="relative" >
        <Header />
        <CMSpacer size="sm" />
        <Image src={LandingImg } w="100%" alt="Splash Image" />
      </VStack>
      <CMSpacer size="sm" />
      <Seperator>
        Customize your google meet as much as you want
      </Seperator>
      <CMSpacer />
      <VStack w="90%" maxW="container.xl" >
        <VStack w="100%" alignItems="start" >
          <Text fontSize="35px" fontWeight="600">How to use{' '}<CustomeetText /></Text>
          <Text fontSize="18px">A technical guide, showing you from 0 to customizing your google meet</Text>
        </VStack>
        <CMSpacer size="sm" />
        <Flex flexDir={['column-reverse', 'column-reverse', 'row']} w="100%" alignItems="flex-start">
          <VStack w={['100%', '100%', '50%']} spacing="5" alignItems="start" justifyContent="flex-start">
            <VStack w={['100%', '100%', '80%']} onMouseOver={() => { setStepHover(1) }} alignItems="flex-start" cursor="pointer" py="4" px="7" border={stepHover === 1 ? "1px solid #CACACA" : "1px solid #FFFFFF"} borderRadius="15px">
              <Text fontSize="15px" color="#797979">Step 1</Text>
              <Text fontSize="18px">Installing from <Link href="www.google.com" color="#0997FF" >chrome web store</Link> </Text>
            </VStack>
            <VStack w={['100%', '100%', '80%']} onMouseOver={() => { setStepHover(2) }}  alignItems="flex-start" cursor="pointer" py="4" px="7" border={stepHover === 2 ? "1px solid #CACACA" : "1px solid #FFFFFF"} borderRadius="15px">
              <Text fontSize="15px" color="#797979">Step 2</Text>
              <Text fontSize="18px">Pin customeet for easy access.</Text>
            </VStack>
            <VStack w={['100%', '100%', '80%']} onMouseOver={() => { setStepHover(3) }}  alignItems="flex-start" cursor="pointer" py="4" px="7" border={stepHover === 3 ? "1px solid #CACACA" : "1px solid #FFFFFF"} borderRadius="15px">
              <Text fontSize="15px" color="#797979">Step 3</Text>
              <Text fontSize="18px">Customize and update!</Text>
            </VStack>
          </VStack>
          <Center w={['100%', '100%', '50%']} mb={['20px', '20px', '0px']} alignSelf="center">
            <Image src={stepImage[stepHover - 1]} width="50%" alt="Splash Image" />
          </Center>
        </Flex>
      </VStack>

      <CMSpacer />

      <VStack w="90%" maxW="container.xl">
        <Text fontSize="35px" fontWeight="600"><CustomeetText /> Notable Features</Text>

        <CMSpacer size="sm" />

        <Flex flexDir={['column', 'column', 'row']} w="100%" alignItems="center" justifyContent="space-between">
          <VStack w={['100%', '100%', '50%']} alignItems="flex-start" justifyContent="flex-start">
            <Text fontSize="25px" color="#000000">Pick themes from millions of choices.</Text>
            <Text fontSize="18px" color="#797979">Themes will be available shortly, you can submit and browse themes made from others in the future too!</Text>
          </VStack>
          <Flex w={['100%', '100%', '50%']} alignItems="center" justifyContent="center">
            <Image src={Notable1} alt="Splash Image" />
          </Flex>
        </Flex>

        <CMSpacer size="sm" />

        <Flex flexDir={['column', 'column', 'row-reverse']} w="100%" alignItems="center" justifyContent="space-between">
          <VStack w={['100%', '100%', '50%']} alignItems={['flex-start', 'flex-start', 'flex-end']} justifyContent="flex-start">
            <Text textAlign={['left', 'left', 'right']} fontSize="25px" color="#000000">Easy to use color picker</Text>
            <Text textAlign={['left', 'left', 'right']} fontSize="18px" color="#797979">Customize colors with this easy to use color picker, click and drag, that easy!</Text>
          </VStack>
          <Flex w={['100%', '100%', '50%']} alignItems="center" justifyContent="center">
            <Image src={Notable2} alt="Splash Image" />
          </Flex>
        </Flex>

        <CMSpacer size="sm" />

        <Flex flexDir={['column', 'column', 'row']} w="100%" alignItems="center" justifyContent="space-between">
          <VStack w={['100%', '100%', '50%']} alignItems="flex-start" justifyContent="flex-start">
            <Text fontSize="25px" color="#000000">Save your own custom theme with custom namings</Text>
            <Text fontSize="18px" color="#797979">You can also save your customized colors as a theme.</Text>
          </VStack>
          <Flex w={['100%', '100%', '50%']} alignItems="center" justifyContent="center">
            <Image src={Notable3} alt="Splash Image" />
          </Flex>
        </Flex>
      </VStack>

      <CMSpacer />

      <Footer />

    </Flex>
  )
}

export default Index
