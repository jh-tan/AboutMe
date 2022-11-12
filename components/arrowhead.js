import { Box, useColorModeValue } from '@chakra-ui/react'

const ArrowHead = () => (
  <Box
    borderTop={0}
    border='8px solid transparent'
    borderBottomColor={useColorModeValue('black', 'white')}
    display='block'
    width={0}
    height={0}
    mb={-2}
    mr={-0.8}
  />
)

export default ArrowHead
