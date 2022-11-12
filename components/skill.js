import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react'

import { technologies, tools } from '../config/const.js'
import Typewriter from './typewriter'
import Proficiency from './proficiency'

const Skill = () => {
  return (
    <Box columns={{ md: 2, sm: 1 }} spacing={6} mt={3}>
      <SimpleGrid columns={{ md: 2, sm: 1 }} spacing={6} mt={3}>
        <GridItem>
          <Heading
            size='md'
            textDecoration='underline'
            textUnderlineOffset={3}
            textDecorationThickness={1}
            mb={1}
          >
            Technologies{' '}
          </Heading>
          <Typewriter Text={technologies} />
        </GridItem>

        <GridItem>
          <Heading
            size='md'
            textDecoration='underline'
            textUnderlineOffset={3}
            textDecorationThickness={1}
            mb={1}
          >
            Tools{' '}
          </Heading>
          <Typewriter Text={tools} />
        </GridItem>
      </SimpleGrid>

      <Heading
        size='md'
        textDecoration='underline'
        textUnderlineOffset={3}
        textDecorationThickness={1}
        my={2}
      >
        Language Proficiency
      </Heading>
        <Proficiency />
    </Box>
  )
}

export default Skill
