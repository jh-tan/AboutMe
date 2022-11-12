import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  AspectRatio,
  Link,
} from '@chakra-ui/react'

import Section from '../components/section'
import Timeline from '../components/timeline'
import Project from '../components/project'
import Skill from '../components/skill'
import { prefix } from '../config/prefix.js'

const Page = () => {
  return (
    <Container maxW='container.md' className='main-content'>
      <Box
        borderRadius='lg'
        mb={6}
        mt={3}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Box>
          Hello, I&apos;m a Software Engineer that currently based in Singapore
          | Malaysia.
        </Box>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box
          flexGrow={1}
          alignSelf='center'
          textAlign={{ md: 'left', sm: 'center' }}
        >
          <Heading as='h2' variant='page-title'>
            Tan Jian Hui
          </Heading>
          <p>Student | Software Engineer</p>
          <Box
            display='flex'
            flexDir='row'
            mt='2'
            justifyContent={{ md: 'start', sm: 'center' }}
          >
            <Link href='https://github.com/jh-tan' target='_blank'>
              <Image
                borderColor={useColorModeValue(
                  'blackAlpha.800',
                  'whiteAlpha.800'
                )}
                borderRadius='full'
                src={`${prefix}/images/GitHub-Mark.png`}
                w='10'
                h='10'
                mr={2}
              />
            </Link>

            <Link
              href='https://www.linkedin.com/in/jian-hui-tan-157219164'
              target='_blank'
            >
              <Image
                borderColor={useColorModeValue(
                  'blackAlpha.800',
                  'whiteAlpha.800'
                )}
                borderRadius='full'
                src={`${prefix}/images/linkedin-icon.png`}
                w='10'
                h='10'
                mr={2}
              />
            </Link>

            <Link href='mailto:hui971105@gmail.com' target='_blank'>
              <Image
                borderColor={useColorModeValue(
                  'blackAlpha.800',
                  'whiteAlpha.800'
                )}
                borderRadius='full'
                src={`${prefix}/images/email.png`}
                w='10'
                h='10'
              />
            </Link>
          </Box>
        </Box>

        <AspectRatio
          width='140px'
          height='140px'
          mt={{ base: 4, md: 0, sm: 4 }}
          m='auto'
        >
          <Image
            borderColor={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle='solid'
            display='inline-block'
            borderRadius='full'
            src={`${prefix}/images/profile.jpg`}
          />
        </AspectRatio>
      </Box>

      <Section delay={0.1}>
        <Heading as='h2' variant='section-title' id='experiences'>
          Work Experience
        </Heading>
        <Timeline />
      </Section>

      <Section delay={0.3}>
        <Heading as='h2' variant='section-title' id='projects'>
          Projects
        </Heading>
        <Project />
      </Section>

      <Section delay={0.5}>
        <Heading as='h2' variant='section-title' id='skills'>
          Skills
        </Heading>
        <Skill />
      </Section>
    </Container>
  )
}

export default Page
