import { Box, Text } from '@chakra-ui/react'

import { language } from '../config/const.js'
import ProgressBar from './progressbar.js'

const Proficiency = () => {
  return (
    <Box>
      {language.map((language) => {
        return (
          <Box display={{ md: 'flex', sm: 'flex' }} flexDir='column' key={language.languageName}>
            <Text fontSize='xl'>{language.languageName}</Text>
            <ProgressBar proficiency = {language.proficiency} />
          </Box>
        )
      })}
    </Box>
  )
}

export default Proficiency
