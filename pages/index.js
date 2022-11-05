import { Container, Box, Heading,useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container maxW='container.lg'>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a aaaaa
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Jian Hui
          </Heading>
          <p>Student</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
