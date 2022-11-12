import {
  Center,
  Divider,
  VStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

import TimelineItems from './timeline-items'
import ArrowHead from './arrowhead'
import { workExperience } from '../config/const.js'

const Timeline = () => {
  return (
    <VStack>
      <ArrowHead />
      {workExperience.map((exp) => {
        return (
          <Box key={exp.Title}>
            <Center height='20px'>
              <Divider
                orientation='vertical'
                borderLeftWidth={3}
                borderColor={useColorModeValue('gray.600', 'white')}
              />
            </Center>
              <TimelineItems  data={exp} />
          </Box>
        )
      })}

      <Center height='20px'>
        <Divider
          orientation='vertical'
          borderStyle='dotted'
          mt={-4}
          borderLeftWidth={3}
          borderColor={useColorModeValue('gray.600', 'white')}
        />
      </Center>
    </VStack>
  )
}

export default Timeline
