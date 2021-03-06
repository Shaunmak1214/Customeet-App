import { Center, Flex, VStack, Link } from '@chakra-ui/layout'
import React from 'react'

const Index = () => {
  return (
    <VStack w="100%" bg="#F5F5F5">
      <Flex flexDir={['column', 'row', 'row']} alignItems="center" justifyContent="space-between" w="90%" maxW="container.xl" py="10">
        <Link href="/privacy-policy" fontWeight="600" color="#176BEF">Privacy Policy</Link>
        <Link fontWeight="600" color="#FF3E30">Extension Page</Link>
        <Link fontWeight="600" color="#F7B529">Buy me a coffee</Link>
        <Link fontWeight="600" color="#179C52">Creator (Shaun Mak)</Link>
      </Flex>
      <Center w="100%">All Rights Reserved @ 2021 Customeet</Center>
    </VStack>
  )
}

export default Index
