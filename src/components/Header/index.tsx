import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { HStack, Text} from '@chakra-ui/layout'
import ChromeIcon from '../../assets/svgs/chrome.svg';
import React from 'react'

const Index = () => {
  return (
    <HStack w="100%" justifyContent="space-between" py="5">
      <HStack spacing="10">
        <Image src="/pngs/customeet.png" height="auto" width="45px" alt="Logo" />
        <Text fontSize="35px" fontWeight="600">Customeet</Text>
      </HStack>
      

      <Button size="lg" bg="white" boxShadow="0px 16px 40px rgba(217, 217, 217, 0.25);" borderRadius="8px">
        <Image src={ChromeIcon} alt="Chrome Icon" mr="10px" />
        <Text fontSize="15px" fontWeight="400" as="a">Get this extension now!</Text></Button>
    </HStack>
  )
}

export default Index
