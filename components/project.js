import {
  SimpleGrid,
  GridItem,
  useColorModeValue,
  Center,
  Text,
} from '@chakra-ui/react'

import { projects } from '../config/const.js'
import ProjectItems from './project-items'

const Project = () => {
  const borderColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <SimpleGrid columns={{ md: 2, sm: 1 }} spacing={6} mt={3}>
      {projects.map((project) => {
        return <ProjectItems key={project.projectName} data={project} />
      })}
      <GridItem
        borderWidth={2}
        borderStyle='solid'
        borderRadius='md'
        borderColor={borderColor}
        minHeight='28'
        display='flex'
        flexDir='column'
        justifyContent='center'
      >
        <Text textAlign='center' fontSize='3xl' fontWeight='black'>STAY TUNE </Text>
        <Text textAlign='center' fontSize='3xl' fontWeight='black'>MORE TO COME</Text>
        <Text textAlign='center' fontSize='3xl' fontWeight='black'>...</Text>
      </GridItem>
    </SimpleGrid>
  )
}

export default Project
