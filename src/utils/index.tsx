import React, {FC} from 'react'
import { Text, Box } from "@chakra-ui/layout";

const CustomeetText = () => {
  return (
    <Text fontSize="35px" fontWeight="600">Custo<span style={{ color: '#176BEF' }}>m</span><span style={{ color: '#FF3E30' }}>e</span><span style={{ color: '#F7B529' }}>e</span><span style={{ color: '#179C52' }}>t</span></Text>
  )
}

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const CMSpacer: FC<Props> = ({ size }) => {
  if(size === 'sm') {
    return (
      <Box height="60px" width="100%" ></Box>
    )
  }else{
    return (
      <Box height="125px" width="100%" ></Box>
    )
  }
}

export {CustomeetText, CMSpacer};