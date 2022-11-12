import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'

const TimelineItems = ({ data }) => {
  return (
    <Box
      display={{ md: 'flex' }}
      flexDir='column'
      minW={{md:'sm'}}
      maxW='md'
      borderWidth={2}
      borderStyle='solid'
      borderRadius='md'
      borderColor={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
      my={2}
      p={4}
    >
      <Box display={{ md: 'flex' }} minW='full'>
        <Heading as='h2' variant='job-company-name'>
          {data.Company}
        </Heading>
        <Box
          as='span'
          color={useColorModeValue('gray.700', 'gray.400')}
          fontSize='xs'
          flexGrow={1}
          alignSelf='center'
          textAlign='right'
        >
          {data.Date}
        </Box>
      </Box>

      <Heading as='h3' variant='job-title'>
        {data.Title}
      </Heading>

      <UnorderedList>
        {data.Description.map((li, idx) => {
          return <ListItem key={idx} fontSize='lg' textAlign='justify'>{li}</ListItem>
        })}
      </UnorderedList>
    </Box>
  )
}

export default TimelineItems
