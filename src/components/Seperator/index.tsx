import { Center, Text } from '@chakra-ui/layout'
import React, {FC} from 'react'

interface Props {
  
}

const Index: FC<Props> = ({children}) => {
  return (
    <Center w="100%" bg="whitesmoke" py="10">
      <Text maxW='90%' fontSize="30px" fontWeight="500" as="h3" >{children}</Text>
    </Center>
  )
}

export default Index
