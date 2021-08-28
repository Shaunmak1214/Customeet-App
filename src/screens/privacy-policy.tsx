import { Flex } from '@chakra-ui/layout';
import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import { CMWrapper, CMSpacer } from '../utils';

const Index = () => {
  return (
    <Flex w="100%" flexDir="column" alignItems="center">
      <CMWrapper>
        <Header />

        <CMSpacer size="sm" />

        <h1>Privacy Policy</h1>
      </CMWrapper>
    </Flex>
  )
}

export default Index
