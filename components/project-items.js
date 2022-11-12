import {
  Box,
  Badge,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react'

const ProjectItems = ({ data }) => {
  // Have to extract out to prevent the error of 'React has detected a change in the order of Hook...'
  const borderColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')
  const color = useColorModeValue('gray.900', 'white')
  return (
    <GridItem
      borderWidth={2}
      borderStyle='solid'
      borderRadius='md'
      borderColor={borderColor}
      minHeight='28'
      display='flex'
      flexDir='column'
    >
      <Heading
        as='h2'
        variant='project-title'
        m={3}
        textDecor='underline'
        textAlign='center'
      >
        {data.projectName}
      </Heading>
      <UnorderedList my={3} p={2} flexGrow={1}>
        <ListItem color={color} fontSize='lg'>
          {data.Description}
        </ListItem>
      </UnorderedList>
      <Box display='flex'>
        {data.Tech.map((techUsed, idx) => {
          return (
            <Badge
              key={idx}
              alignSelf='center'
              borderRadius='md'
              ml={3}
              my={2}
              bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.200')}
            >
              {techUsed}
            </Badge>
          )
        })}
        <Link
          p={2}
          href={data.Link}
          target='_blank'
          mb={-1}
          flexGrow={1}
          textAlign='end'
        >
          {`>>`}
        </Link>
      </Box>
    </GridItem>
  )
}

export default ProjectItems
